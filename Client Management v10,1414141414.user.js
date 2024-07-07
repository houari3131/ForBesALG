// ==UserScript==
// @name         Client Management v10,1414141414
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Manage clients with add, edit, delete buttons, and auto login with captcha bypass when client is selected
// @author       Your Name
// @match        *://*/*
// @match        https://algeria.blsspainglobal.com/*/LogIn*
// @match        https://algeria.blsspainglobal.com/*/log*n*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let clientsVisible = false;

    // Create the main buttons
    function createButtons() {
        const container = document.querySelector("#div-main > div > div");
        if (!container) {
            console.error('Container element not found!');
            return;
        }

        let buttonContainer = document.getElementById('buttonContainer');
        if (!buttonContainer) {
            buttonContainer = document.createElement('div');
            buttonContainer.id = 'buttonContainer';
            buttonContainer.style.display = 'flex';
            buttonContainer.style.gap = '10px';
            buttonContainer.style.marginBottom = '10px';
            container.appendChild(buttonContainer);
        }

        const addButton = document.createElement('button');
        addButton.textContent = 'Add Client';
        styleButton(addButton);
        addButton.onclick = addClient;
        buttonContainer.appendChild(addButton);

        const loadButton = document.createElement('button');
        loadButton.textContent = 'Import Clients';
        styleButton(loadButton);
        loadButton.onclick = () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.txt';
            fileInput.onchange = handleFileUpload;
            fileInput.click();
        };
        buttonContainer.appendChild(loadButton);

        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download Clients';
        styleButton(downloadButton);
        downloadButton.onclick = downloadClients;
        buttonContainer.appendChild(downloadButton);

        const clearButton = document.createElement('button');
        clearButton.textContent = 'Clear All Clients';
        styleButton(clearButton);
        clearButton.onclick = clearClients;
        buttonContainer.appendChild(clearButton);

        const uploadButton = document.createElement('button');
        uploadButton.textContent = 'Upload Photo';
        styleButton(uploadButton);
        uploadButton.onclick = () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.onchange = async function() {
                const fileId = await uploadProfileImage(this.files[0]);
                if (fileId) {
                    displayImageAndId(this.files[0], fileId);
                }
            };
            fileInput.click();
        };
        buttonContainer.appendChild(uploadButton);

        const submitButton = document.createElement('button');
        submitButton.textContent = 'SUBMIT OFF';
        styleButton(submitButton);
        buttonContainer.appendChild(submitButton);

        let isEnabled = localStorage.getItem('isEnabled') === 'true';

        function updateButton() {
            submitButton.textContent = isEnabled ? 'SUBMIT ON' : 'SUBMIT OFF';
        }
        updateButton();

        submitButton.onclick = function() {
            isEnabled = !isEnabled;
            localStorage.setItem('isEnabled', isEnabled);
            updateButton();
        };
    }

    // Function to handle file upload
    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            const clients = parseClientsFromFile(content);
            addClientsToLocalStorage(clients);
            updateClientButtons();
        };
        reader.readAsText(file);
    }

    // Function to parse clients from file content
    function parseClientsFromFile(content) {
        const clients = [];
        const lines = content.split('\n\n');

        lines.forEach(block => {
            const client = {};
            block.split('\n').forEach(line => {
                const [key, value] = line.split('=');
                if (key && value) {
                    client[key.trim()] = value.trim();
                }
            });
            if (client.name && client.Email) {
                clients.push(client);
            }
        });

        return clients;
    }

    // Function to add clients to localStorage
    function addClientsToLocalStorage(clients) {
        const storedClients = JSON.parse(localStorage.getItem('clients')) || {};
        clients.forEach(client => {
            storedClients[client.name] = client;
        });
        localStorage.setItem('clients', JSON.stringify(storedClients));
    }

    // Function to download clients as a text file
    function downloadClients() {
        const clients = JSON.parse(localStorage.getItem('clients')) || {};
        let content = '';
        Object.values(clients).forEach(client => {
            content += `name=${client.name}\nEmail=${client.Email}\nPass=${client.Pass}\nPassOtp=${client.PassOtp}\nFmill=${client.Fmill}\ncat=${client.cat}\ncty=${client.cty}\nvist=${client.vist}\nsupvist=${client.supvist}\nLINKPHOTO=${client.LINKPHOTO}\nLINKSELFI01=${client.LINKSELFI01}\nLINKSELFI02=${client.LINKSELFI02}\nCardNumber=${client.CardNumber}\nCardExpiry=${client.CardExpiry}\nCardCVV=${client.CardCVV}\nCardHolderName=${client.CardHolderName}\n\n`;
        });

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'clients.txt';
        a.click();
        URL.revokeObjectURL(url);
    }

    // Function to clear all clients from localStorage
    function clearClients() {
        if (confirm('هل أنت متأكد أنك تريد مسح جميع العملاء؟')) {
            localStorage.removeItem('clients');
            updateClientButtons();
        }
    }

    // Function to style buttons
    function styleButton(button) {
        button.style.borderRadius = '80px';
        button.style.marginRight = '5px'; // تغيير المسافة بين الأزرار
        button.style.color = 'black';
        button.style.fontWeight = 'bold';
        button.style.padding = '10px 20px';
        button.style.border = '1px solid black';
        button.style.backgroundColor = 'white';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        button.style.transition = 'background-color 0.3s, box-shadow 0.3s';
        button.onmouseover = function() {
            button.style.backgroundColor = '#f0f0f0';
            button.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.1)';
        };
        button.onmouseout = function() {
            button.style.backgroundColor = 'white';
            button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        };
    }

    // Function to style icons
    function styleIcon(icon) {
        icon.style.cursor = 'pointer';
        icon.style.fontSize = '16px';
        icon.style.marginLeft = '10px';
        icon.style.color = '#ca9330';
    }

    // Function to upload profile image
    async function uploadProfileImage(file) {
        try {
            const res = await fetch('/DZA/query/UploadProfileImage', {
                method: 'POST',
                body: (() => {
                    const data = new FormData();
                    data.append('file', file);
                    return data;
                })(),
            });
            if (res.ok) {
                const json = await res.json();
                if (json.success) {
                    return json.fileId;
                }
                throw new TypeError('Failed to upload profile image', json);
            }
            throw new TypeError('Bad response', res);
        } catch (error) {
            console.error('Failed to upload profile image', error);
            alert('Failed to upload profile image');
            return null;
        }
    }

    // Function to display uploaded image and ID with copy button
    function displayImageAndId(file, fileId) {
        const container = document.querySelector("#div-main > div > div");
        if (!container) {
            console.error('Container element not found!');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '200px';
            img.style.display = 'block';
            img.style.marginTop = '10px';

            const imgContainer = document.createElement('div');
            imgContainer.style.display = 'flex';
            imgContainer.style.alignItems = 'center';
            imgContainer.style.marginTop = '10px';

            const imgId = document.createElement('span');
            imgId.textContent = `معرف الصورة: ${fileId}`;
            imgId.style.marginRight = '10px';

            const copyButton = document.createElement('button');
            copyButton.textContent = 'Copy';
            copyButton.onclick = () => {
                navigator.clipboard.writeText(fileId).then(() => {
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                });
            };
            styleButton(copyButton);
            copyButton.style.margin = '0 5px';
            copyButton.style.padding = '5px 10px';
            copyButton.style.borderRadius = '5px';
            copyButton.style.fontSize = '12px';

            imgContainer.appendChild(imgId);
            imgContainer.appendChild(copyButton);

            container.appendChild(img);
            container.appendChild(imgContainer);
        };
        reader.readAsDataURL(file);
    }

    // Create the form to add/edit a client
    function createClientForm(client = {}) {
        const container = document.querySelector("#div-main > div > div");
        if (!container) {
            console.error('Container element not found!');
            return;
        }

        const form = document.createElement('form');
        form.id = 'clientForm';
        form.style.marginTop = '10px';

        const fields = [
            { name: 'name', type: 'text', label: 'Name' },
            { name: 'Email', type: 'email', label: 'Email', required: true },
            { name: 'Pass', type: 'text', label: 'Pass' },
            { name: 'PassOtp', type: 'text', label: 'PassOtp' },
            { name: 'Fmill', type: 'select', label: 'Fmill', options: [1, 2, 3, 4, 5, 6, 7, 8] },
            { name: 'cat', type: 'select', label: 'Cat', options: ['Normal', 'Premium', 'Prime Time'] },
            { name: 'cty', type: 'select', label: 'Cty', options: ['Oran', 'Algiers'] },
            { name: 'vist', type: 'select', label: 'Vist', options: ['Schengen Visa','Schengen visa ( Estonia)', 'National Visa'] },
            { name: 'supvist', type: 'select', label: 'Supvist', options: ['Schengen Visa','Schengen visa ( Estonia)', 'National Visa'] },
            { name: 'LINKPHOTO', type: 'text', label: 'LINKPHOTO' },
            { name: 'LINKSELFI01', type: 'text', label: 'LINKSELFI01' },
            { name: 'LINKSELFI02', type: 'text', label: 'LINKSELFI02' },
            { name: 'CardNumber', type: 'text', label: 'Card Number' },
            { name: 'CardExpiry', type: 'text', label: 'Card Expiry' },
            { name: 'CardCVV', type: 'text', label: 'Card CVV' },
            { name: 'CardHolderName', type: 'text', label: 'Card Holder Name' },
        ];

        fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = `${field.label}:`;
            label.style.display = 'block';

            let input;
            if (field.type === 'select') {
                input = document.createElement('select');
                field.options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option;
                    opt.textContent = option;
                    input.appendChild(opt);
                });
                input.name = field.name;
                input.value = client[field.name] || field.options[0]; // Default to first option if not set
            } else {
                input = document.createElement('input');
                input.type = field.type;
                input.name = field.name;
                input.value = client[field.name] || '';
                if (field.required) {
                    input.required = true;
                }
            }

            input.style.width = '100%';
            label.appendChild(input);
            form.appendChild(label);
        });

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.type = 'button';
        saveButton.onclick = () => saveClient(client.name);
        styleButton(saveButton);
        form.appendChild(saveButton);

        container.appendChild(form);
    }

    // Save client to localStorage
    function saveClient(oldName) {
        const form = document.getElementById('clientForm');
        const client = {};
        let valid = true;

        [...form.elements].forEach(input => {
            if (input.name) {
                if (input.type === 'email' && input.required && !validateEmail(input.value)) {
                    alert('Please enter a valid email');
                    valid = false;
                }
                if (input.type === 'select-one' && !input.value) {
                    input.value = input.options[0].value; // Assign default value if not selected
                }
                client[input.name] = input.value;
            }
        });

        // Ensure default values are set for select fields if not provided
        const selectFields = ['Fmill', 'cat', 'cty', 'vist', 'supvist'];
        selectFields.forEach(field => {
            if (!client[field]) {
                client[field] = form.querySelector(`select[name=${field}]`).value;
            }
        });

        if (!valid) return;

        const clients = JSON.parse(localStorage.getItem('clients')) || {};
        if (oldName && oldName !== client.name) {
            delete clients[oldName];
        }
        clients[client.name] = client;
        localStorage.setItem('clients', JSON.stringify(clients));

        // Save payment details to sessionStorage
        const paymentDetails = {
            cardNumber: client.CardNumber,
            cardExpiry: client.CardExpiry,
            cardCVV: client.CardCVV,
            cardHolderName: client.CardHolderName
        };
        sessionStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));

        // Hide the form and show a success message
        form.remove();
        showSuccessMessage('تمت إضافة العميل');

        updateClientButtons();
    }

    // Function to show a success message
    function showSuccessMessage(message) {
        const container = document.querySelector("#div-main > div > div");
        if (!container) {
            console.error('Container element not found!');
            return;
        }

        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.padding = '10px';
        messageDiv.style.marginTop = '10px';
        messageDiv.style.border = '1px solid #c3e6cb';
        messageDiv.style.borderRadius = '5px';

        container.appendChild(messageDiv);

        // Hide the message after 2 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 2000);
    }

    // Validate email address
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Create a button for the client
    function createClientButton(clientName, index) {
        const container = document.querySelector("#div-main > div > div");
        if (!container) {
            console.error('Container element not found!');
            return;
        }

        const clients = JSON.parse(localStorage.getItem('clients')) || {};
        const client = clients[clientName];

        const clientContainer = document.createElement('div');
        clientContainer.className = 'client-container';
        clientContainer.style.display = clientsVisible ? 'flex' : 'none';
        clientContainer.style.alignItems = 'center';
        clientContainer.style.marginBottom = '5px';
        clientContainer.style.border = '1px solid #ccc';
        clientContainer.style.padding = '5px';
        clientContainer.style.borderRadius = '5px';

        const img = document.createElement('img');
        img.src = " https://algeria.blsspainglobal.com/DZA/query/getfile?fileid=" + client.LINKPHOTO;                                 //client.LINKPHOTO;
        img.style.maxWidth = '50px';
        img.style.maxHeight = '50px';
        img.style.marginRight = '10px';
        clientContainer.appendChild(img);

        const button = document.createElement('button');
        button.textContent = `${index + 1}. ${clientName} (${client.cty})   `;
        styleButton(button);
        button.style.flex = '1';
        button.style.marginRight = '10px';
        button.onclick = () => autoLoginClient(clientName, button);
        clientContainer.appendChild(button);

        const editIcon = document.createElement('span');
        editIcon.textContent = '✏️'; // Unicode pencil icon
        styleIcon(editIcon);
        editIcon.onclick = () => editClient(clientName);
        clientContainer.appendChild(editIcon);

        const deleteIcon = document.createElement('span');
        deleteIcon.textContent = '🗑️'; // Unicode trash can icon
        styleIcon(deleteIcon);
        deleteIcon.onclick = () => removeClient(clientName);
        clientContainer.appendChild(deleteIcon);

        container.appendChild(clientContainer);

        // Check if this is the current client
        if (clientName === getCurrentClient()) {
            button.style.backgroundColor = 'red';
            clientContainer.style.display = 'flex'; // Always show current client
        }
    }

    // Auto login client
    function autoLoginClient(clientName, button) {
        const clients = JSON.parse(localStorage.getItem('clients')) || {};
        const client = clients[clientName];
        if (client) {
            // Store client information in localStorage
            localStorage.setItem('email', client.Email);
            localStorage.setItem('password', client.Pass);
            localStorage.setItem('passwordOTP', client.PassOtp);
            localStorage.setItem('category', client.cat);
            localStorage.setItem('familyOfMembers', client.Fmill);
            localStorage.setItem('location', client.cty);
            localStorage.setItem('visatype', client.vist);
            localStorage.setItem('visaSubtype', client.supvist);
            localStorage.setItem('linkimg', client.LINKPHOTO);
            localStorage.setItem('SELFI01', client.LINKSELFI01);
            localStorage.setItem('SELFI02', client.LINKSELFI02);

            // Store payment details in sessionStorage
            const paymentDetails = {
                cardNumber: client.CardNumber,
                cardExpiry: client.CardExpiry,
                cardCVV: client.CardCVV,
                cardHolderName: client.CardHolderName
            };
            sessionStorage.setItem('paymentDetails', JSON.stringify(paymentDetails));

            // Change button color to red and update current client
            setCurrentClient(clientName);
            document.querySelectorAll('.client-container').forEach(btn => {
                btn.style.backgroundColor = 'white'; // Reset previous button color
                btn.style.display = 'none'; // Hide all clients
            });
            button.parentElement.style.backgroundColor = 'red';
            button.parentElement.style.display = 'flex'; // Show current client

            // Redirect to login page
            window.location.href = "https://algeria.blsspainglobal.com/DZA/account/Login";
        }
    }

    // Get current client from localStorage
    function getCurrentClient() {
        return localStorage.getItem('currentClient');
    }

    // Set current client in localStorage
    function setCurrentClient(clientName) {
        localStorage.setItem('currentClient', clientName);
    }

    // Add a new client
    function addClient() {
        document.getElementById('clientForm')?.remove();
        createClientForm();
    }

    // Edit an existing client
    function editClient(clientName) {
        loadClient(clientName);
    }

    // Load client information into the form
    function loadClient(clientName) {
        const clients = JSON.parse(localStorage.getItem('clients')) || {};
        const client = clients[clientName];
        if (client) {
            document.getElementById('clientForm')?.remove();
            createClientForm(client);
        }
    }

    // Remove a client
    function removeClient(clientName) {
        const clients = JSON.parse(localStorage.getItem('clients')) || {};
        delete clients[clientName];
        localStorage.setItem('clients', JSON.stringify(clients));
        updateClientButtons();
    }

    // Update client buttons dynamically
    function updateClientButtons() {
        const container = document.querySelector("#div-main > div > div");
        if (!container) {
            console.error('Container element not found!');
            return;
        }

        // Remove existing client buttons
        const existingButtons = container.querySelectorAll('.client-container');
        existingButtons.forEach(button => button.remove());

        // Create client buttons
        const clients = JSON.parse(localStorage.getItem('clients')) || {};
        Object.keys(clients).forEach((clientName, index) => createClientButton(clientName, index));

        // Add toggle button for showing/hiding all clients
        let toggleButton = document.getElementById('toggleClientsButton');
        if (!toggleButton) {
            toggleButton = document.createElement('button');
            toggleButton.id = 'toggleClientsButton';
            toggleButton.textContent = 'Show All Clients';
            styleButton(toggleButton);
            toggleButton.onclick = toggleClientsVisibility;
            container.appendChild(toggleButton);
        }
    }

    // Toggle the visibility of all clients
    function toggleClientsVisibility() {
        clientsVisible = !clientsVisible;
        document.querySelectorAll('.client-container').forEach(clientContainer => {
            clientContainer.style.display = clientsVisible ? 'flex' : 'none';
        });
        document.getElementById('toggleClientsButton').textContent = clientsVisible ? 'Hide Clients' : 'Show All Clients';
    }

    // Initialize script
    function init() {
        createButtons();
        updateClientButtons();
    }

    init();

})();
