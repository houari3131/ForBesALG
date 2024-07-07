// ==UserScript==
// @name         Add Buttons and Set localStorage VERIVEI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add buttons to a specific area and set localStorage value when clicked
// @author       You
// @match        https://www.blsspainmorocco.net/MAR/bls/vtv**
// @match        https://www.blsspainmorocco.net/MAR/Bls/vtv**
// @match        https://algeria.blsspainglobal.com/**
// @match        https://algeria.blsspainglobal.com/DZA/NewCaptcha/GenerateCaptcha
// @match        https://algeria.blsspainglobal.com/DZA/Bls/vtv**
// @grant        none
// ==/UserScript==

(function() {
    var append_container = document.querySelector("#navbarCollapse2");

    // Create three buttons
    var button1 = document.createElement("button");
    button1.textContent = "Normal";
    button1.style.borderRadius = "80px";
    button1.style.marginRight = "5px"; // تغيير المسافة بين الأزرار
    button1.style.color = "#ca9330";
    button1.style.fontWeight = "bold";

    var button2 = document.createElement("button");
    button2.textContent = "Premium";
    button2.style.borderRadius = "80px";
    button2.style.marginRight = "5px"; // تغيير المسافة بين الأزرار
    button2.style.color = "#ca9330";
    button2.style.fontWeight = "bold";

    var button3 = document.createElement("button");
    button3.textContent = "Prime Time";
    button3.style.borderRadius = "80px";
    button3.style.marginRight = "5px"; // تغيير المسافة بين الأزرار
    button3.style.color = "#ca9330";
    button3.style.fontWeight = "bold";

    // Function to reset button colors
    function resetButtonColors() {
        button1.style.backgroundColor = "";
        button2.style.backgroundColor = "";
        button3.style.backgroundColor = "";
    }

    // Add event listeners
    button1.addEventListener("click", function() {
        resetButtonColors();
        button1.style.backgroundColor = "red";
        localStorage.setItem('category', 'Normal');
        var Client = {
            category: 'Normal',
        };
        var mCaty;
        var vsN = 0;
        var vsNl = 0;
        for (var i = 1; i <= 5; i++) {
            const caty = $('#AppointmentCategoryId' + i + '_label');
            if (caty.is(':visible')) {
                $("#AppointmentCategoryId" + i + "_listbox > .k-item:contains('" + Client.category + "')").click();
                mCaty = document.querySelector("#AppointmentCategoryId" + i).value;
            }
        }
    });

    button2.addEventListener("click", function() {
        resetButtonColors();
        button2.style.backgroundColor = "red";
        localStorage.setItem('category', 'Premium');
        var Client = {
            category: 'Premium',
        };
        var mCaty;
        var vsN = 0;
        var vsNl = 0;
        for (var i = 1; i <= 5; i++) {
            const caty = $('#AppointmentCategoryId' + i + '_label');
            if (caty.is(':visible')) {
                $("#AppointmentCategoryId" + i + "_listbox > .k-item:contains('" + Client.category + "')").click();
                mCaty = document.querySelector("#AppointmentCategoryId" + i).value;
            }
        }
    });

    button3.addEventListener("click", function() {
        resetButtonColors();
        button3.style.backgroundColor = "red";
        localStorage.setItem('category', 'Prime Time');
        var Client = {
            category: 'Prime Timee',
        };
        var mCaty;
        var vsN = 0;
        var vsNl = 0;
        for (var i = 1; i <= 5; i++) {
            const caty = $('#AppointmentCategoryId' + i + '_label');
            if (caty.is(':visible')) {
                $("#AppointmentCategoryId" + i + "_listbox > .k-item:contains('" + Client.category + "')").click();
                mCaty = document.querySelector("#AppointmentCategoryId" + i).value;
            }
        }
    });

    // Append buttons to the container
    append_container.prepend(button1);
    append_container.prepend(button2);
    append_container.prepend(button3);
})();
