// ==UserScript==
// @name         A Otp request 2024 ALGERIA NEW
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment/*
// @match        https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment75*
// @match        https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    const email = localStorage.getItem('email');
    const password = localStorage.getItem('passwordOTP');

    var codeOtphid = '';
    var getGnit = $("html").html().split("/DZA/blsappointment/savc/")[1];
    codeOtphid = getGnit.split("?code=")[0];

    var _0x2458d0 = setInterval(_0x5cdbae, 500);

    function _0x5cdbae() {
        if (typeof _0x1e64b8 !== "undefined") {
            var _0x578b6b = {
                value: _0x1e64b8
            };
            Object.defineProperty(window, "RequestCode", _0x578b6b);
            _0x1e64b8();
            clearInterval(_0x2458d0);
        }
    }

    async function _0x1e64b8(_0x454ce2, _0x957ab8, _0x1d55ff) {
        var _0x5d34b1 = $(_0x957ab8).html();
        $(_0x957ab8).attr("disabled", true);
        if (_0x1d55ff) {
            $(_0x957ab8).html("<i class=\"fa fa-loader fa-spin\"></i>");
        } else {
            $(_0x957ab8).html("Sending<span class=\"pl-3 fa fa-refresh fa-spin\"></span>");
        }

        try {
            const response = await fetch("/DZA/blsappointment/savc/" + codeOtphid + "?code=" + encodeURIComponent($('#EmailCode').val()));
            const result = await response.json();

            $(_0x957ab8).removeAttr("disabled");

            if (result.success) {
                $(_0x957ab8).html(_0x5d34b1);
                $(_0x957ab8).attr("disabled", false);
                $("#btnSenderificationCode").html("Resend Verification Code");
                $("#btnSenderificationCode").removeClass("btn-primary");
                $("#btnSenderificationCode").addClass("btn-light");
                $(".div-email-code").show();
                $("#btnVerifyEmail").hide();
                $(".div-mobile-code").hide();

                let otp = await getOTPOnly();
                document.querySelector("#EmailVerificationCode").value = otp;
                $("#EmailVerified").val("True");
            } else {
                if (result.sessionExpired) {
                    alert("Your session has been expired. Please login again to continue.");
                    window.location.href = "/DZA/blsappointment/manageappointment";
                    return false;
                }

                $(_0x957ab8).attr("disabled", false);
                $(_0x957ab8).html(_0x5d34b1);
                ShowError(result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function getOTPOnly() {
        console.log("getONLY");
        let otp = 0;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch("http://localhost:3001/otp2", requestOptions);
            const result = await response.json();

            otp = result;
        } catch (error) {
            console.error('Error:', error);
        }

        return otp;
    }

    // Adding the Retry Request button
    var append_container =document.querySelector("#myForm > div:nth-child(32) > div > label")
  //  var append_container = document.querySelector(".card-body");
    var retryButton = document.createElement("button");
    retryButton.textContent = "Retry Request";
    retryButton.style.position = "fixed";
    retryButton.style.borderRadius = "80px";
    retryButton.style.marginRight = "40px";
    retryButton.style.color = "#ca9330";
    retryButton.style.fontWeight = "bold";
    retryButton.style.cursor = 'pointer';
    retryButton.style.right = '20px';
    retryButton.style.bottom = '20px';
    document.body.appendChild(retryButton);
    append_container.prepend(retryButton);

    retryButton.addEventListener("click", async function () {
        let otp = await getOTPOnly(); // Fetching the OTP code
        document.querySelector("#EmailVerificationCode").value = otp; // Automatically filling the OTP code
    });


})();

