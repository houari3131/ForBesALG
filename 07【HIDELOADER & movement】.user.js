// ==UserScript==
// @name         07【HIDELOADER & movement】
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds utility buttons and enhances payment processing on specified pages.
// @author       ash
// @match        https://algeria.blsspainglobal.com/*
// @icon         https://www.blsspainmorocco.net/assets/images/logo.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to create and return a styled button
    function createButton(text, onClickFunction) {
        var button = document.createElement("button");
        button.innerHTML = text;
        button.style.position = "fixed";
        button.style.top = "10px";
        button.style.right = "10px";
        button.style.zIndex = "10000";
        button.style.padding = "10px 20px";
        button.style.background = "linear-gradient(to bottom, #ff9999, #ff6666)";
        button.style.color = "white";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.borderRadius = "20px";
        button.style.userSelect = "none"; // Prevent text selection
        button.style.fontSize = "16px";
        button.style.fontWeight = "bold";
        button.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
        button.style.textShadow = "1px 1px 2px rgba(0, 0, 0, 0.5)";
        button.style.transition = "transform 0.2s"; // Animation for click effect

        button.addEventListener("click", onClickFunction);

        // Add click animation effect
        button.addEventListener("mousedown", function() {
            button.style.transform = "scale(0.95)";
        });
        button.addEventListener("mouseup", function() {
            button.style.transform = "scale(1)";
        });

        // Make the button draggable
        button.onmousedown = function(event) {
            let shiftX = event.clientX - button.getBoundingClientRect().left;
            let shiftY = event.clientY - button.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                button.style.left = pageX - shiftX + 'px';
                button.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            // Move the button on mousemove
            document.addEventListener('mousemove', onMouseMove);

            // Drop the button, remove unneeded handlers
            button.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                button.onmouseup = null;
            };

            button.onmouseleave = function() {
                document.removeEventListener('mousemove', onMouseMove);
                button.onmouseup = null;
            };

        };

        button.ondragstart = function() {
            return false;
        };

        return button;
    }

    // Hide Loader Button
    var hideLoaderButton = createButton("Hide Loader", function() {
        if (typeof HideLoader === 'function') {
            HideLoader();
        } else {
            console.error("HideLoader function not found.");
        }
    });

    // Append buttons to the body
    document.body.appendChild(hideLoaderButton);

})();