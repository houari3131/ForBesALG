// ==UserScript==
// @name         Track and Retry HTTP Requests with Limited Status Bar and Alerts 2222222
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Track HTTP requests, retry on errors, and update status bar with a limit of 4 requests. Alert on 429 and 403 errors.
// @author       You
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a status bar
    var statusBar = document.createElement('div');
    statusBar.style.position = 'fixed';
    statusBar.style.bottom = '0';
    statusBar.style.left = '0';
    statusBar.style.width = '100%';
    statusBar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    statusBar.style.color = 'white';
    statusBar.style.padding = '10px';
    statusBar.style.zIndex = '10000';
    document.body.appendChild(statusBar);

    var requests = [];

    // Function to update status bar
    function updateStatusBar() {
        statusBar.innerHTML = '';
        let displayedRequests = requests.filter(req => req.status !== 200 && req.status !== null).slice(-4);
        displayedRequests.forEach(req => {
            var div = document.createElement('div');
            div.textContent = `URL: ${req.url}, Status: ${req.status}, Attempts: ${req.attempts}`;
            statusBar.appendChild(div);
        });
    }

    // Function to send request with retry
    function sendRequestWithRetry(req) {
        let attempts = 0;
        const maxAttempts = 3;

        function attempt() {
            const xhr = new XMLHttpRequest();
            xhr.open(req.method, req.url, true);
            for (const header in req.headers) {
                xhr.setRequestHeader(header, req.headers[header]);
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    attempts++;
                    req.status = xhr.status;
                    req.attempts = attempts;
                    if ([429, 403].includes(xhr.status)) {
                        alert(`Error ${xhr.status}: ${xhr.status === 429 ? 'Too Many Requests' : 'Forbidden'}`);
                    }
                    if (xhr.status === 200 || attempts >= maxAttempts || ![500, 502, 504].includes(xhr.status)) {
                        updateStatusBar();
                    } else {
                        setTimeout(attempt, 1000);
                    }
                }
            };
            xhr.send(req.body);
        }
        attempt();
    }

    // Override XMLHttpRequest
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;

    XMLHttpRequest.prototype.open = function(method, url) {
        this._method = method;
        this._url = url;
        this._headers = {};
        return originalOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.setRequestHeader = function(header, value) {
        this._headers[header] = value;
        return originalSetRequestHeader.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function(body) {
        const request = {
            method: this._method,
            url: this._url,
            headers: this._headers,
            body: body,
            status: null,
            attempts: 0
        };
        requests.push(request);
        updateStatusBar();

        const self = this;
        const originalOnreadystatechange = this.onreadystatechange;
        this.onreadystatechange = function() {
            if (self.readyState === 4) {
                request.status = self.status;
                if ([429, 403].includes(self.status)) {
                  //  alert(`Error ${self.status}: ${self.status === 429 ? 'Too Many Requests' : 'Forbidden'}`);
                }
                if (self.status !== 200 && [500, 502, 504].includes(self.status)) {
                    sendRequestWithRetry(request);
                }
                if (originalOnreadystatechange) {
                    originalOnreadystatechange.apply(self, arguments);
                }
                updateStatusBar();
            }
        };

        return originalSend.apply(this, arguments);
    };

    // Update the status bar every second
    setInterval(updateStatusBar, 1000);
})();
