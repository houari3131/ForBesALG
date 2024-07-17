// ==UserScript==
// @name          visa tybe ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Combined functionalities of both scripts
// @author       Combined
// @match        https://algeria.blsspainglobal.com/DZA/bls/vtv*
// @match        https://algeria.blsspainglobal.com/DZA/Bls/vtv*
// @match        https://algeria.blsspainglobal.com/DZA/bls/VisaTypeVerification*
// @match        https://algeria.blsspainglobal.com/DZA/bls/visatypeverification*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Functionality from the first script: Click verify button
    var element = document.querySelector("#btnVerify");
    if (element) {
        window.setTimeout(function() {
            element.click();
        }, 1000);
    }

    // Functionality from the second script
    $(document).ready(function() {
        // Add button
       // var btn = $("<center>").attr('id', 'cancelRefresh').html("<button style='width:100%; color:#FFF; background:#FF3322; border-bottom:5px;'><b>  </b><br><img src='"+"'  width='50' height='50'> scripte HOUARI dz  </center></button>");
        $("body").prepend(btn);

        // Reload on specific errors
        if ($("body").html().includes("Backend service does not exist") || $("body").html().includes("403 Forbidden")) {
            setTimeout(function() {
                window.location.reload();
            }, 1000);
        }

        if ($("body").html().includes('502 Bad Gateway') || $("body").html().includes('504 Gateway Time-out') || $("body").html().includes('Application Temporarily Unavailable')) {
            console.log("502 Bad Gateway 504");
            window.location.reload();
            return;
        }
    });

    // Functionality to click submit button when verified button is visible
    var checkInterval = setInterval(checkAndSubmit, 100);

    function checkAndSubmit() {
        if ($("#btnVerified").is(":visible")) {
            $("#btnSubmit").click();
            clearInterval(checkInterval);
        }
    }
})();
