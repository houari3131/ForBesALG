// ==UserScript==
// @name         Modifying V222222
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Modifying functions on a website
// @author       DevTeam
// @match        https://www.blsspainmorocco.net/MAR/bls/vt/*
// @match        https://algeria.blsspainglobal.com/DZA/bls/vt*/*
// @grant        none
// ==/UserScript==

// Load client information from localStorage
var Client = {
    familyOfMembers: localStorage.getItem('familyOfMembers'),
    location: localStorage.getItem('location'),
    category: localStorage.getItem('category'),
    visatype: localStorage.getItem('visatype'),
    visaSubtype: localStorage.getItem('visaSubtype')
};

$(document).ready(function() {
    // Check if functionality is enabled
  
        // Your original code here
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

        var pageLocation = window.location.href.toUpperCase();
        var mLocation, mCaty, mVisaType, mVisaSubtype, mFamy, famEX;
        var vsN = 0, vsNl = 0;

        for (var i = 1; i <= 5; i++) {
            const fm = $("#family" + i);
            const indf = $("#self" + i);
            const visTp = $('#VisaType' + i + '_label');
            const caty = $('#AppointmentCategoryId' + i + '_label');
            const visSbTp = $('#VisaSubType' + i + '_label');
            const loc = $('#Location' + i + '_label');

            if (fm.is(':visible')) {
                famEX = $("#family" + i);
            }
            if (indf.is(':visible')) {
                individual = $("#self" + i);
            }
            if (caty.is(':visible')) {
                $("#AppointmentCategoryId" + i + "_listbox > .k-item:contains('" + Client.category + "')").click();
                mCaty = document.querySelector("#AppointmentCategoryId" + i).value;
            }
            if (visTp.is(':visible')) {
                $("#VisaType" + i + "_listbox > .k-item:contains('" + Client.visatype + "')").click();
                mVisaType = document.querySelector("#VisaType" + i).value;
            }
            if (visSbTp.is(':visible')) {
                vsN = i;
                $("#VisaSubType" + vsN + "_listbox > .k-item:contains('" + Client.visaSubtype + "')").click();
                mVisaSubtype = document.querySelector("#VisaSubType" + vsN).value;
            }
            if (loc.is(':visible')) {
                vsNl = i;
                $("#Location" + vsNl + "_listbox > .k-item:contains('" + Client.location + "')").click();
                mLocation = document.querySelector("#Location" + vsNl).value;
            }
        }

        for (var i = 1; i <= 5; i++) {
            const fm = $("#family" + i);
            const indf = $("#self" + i);
            const visTp = $('#VisaType' + i + '_label');
            const caty = $('#AppointmentCategoryId' + i + '_label');
            const visSbTp = $('#VisaSubType' + i + '_label');
            const loc = $('#Location' + i + '_label');

            if (fm.is(':visible')) {
                famEX = $("#family" + i);
            }
            if (indf.is(':visible')) {
                //  individual = $("#self" + i);
            }
            if (caty.is(':visible')) {
                $("#AppointmentCategoryId" + i + "_listbox > .k-item:contains('" + Client.category + "')").click();
                mCaty = document.querySelector("#AppointmentCategoryId" + i).value;
            }
            if (visTp.is(':visible')) {
                $("#VisaType" + i + "_listbox > .k-item:contains('" + Client.visatype + "')").click();
                mVisaType = document.querySelector("#VisaType" + i).value;
            }
            if (visSbTp.is(':visible')) {
                vsN = i;
                $("#VisaSubType" + vsN + "_listbox > .k-item:contains('" + Client.visaSubtype + "')").click();
                mVisaSubtype = document.querySelector("#VisaSubType" + vsN).value;
            }
            if (loc.is(':visible')) {
                vsNl = i;
                $("#Location" + vsNl + "_listbox > .k-item:contains('" + Client.location + "')").click();
                mLocation = document.querySelector("#Location" + vsNl).value;
            }
        }

        if (Client.familyOfMembers > 1) {
            famEX.click();
            setTimeout(() => {
                window.location.href = `javaScript: OnFamilyAccept();`;
            }, 1000);
            for (var is = 1; is <= 5; is++) {
                $("#ApplicantsNo3_label");
                if ($("#ApplicantsNo" + is + "_label").is(':visible')) {
                    $("#ApplicantsNo" + is + "_listbox > .k-item:contains('" + Client.familyOfMembers + " Members')").click();
                }
            }
        }

        if (Client.visatype === "National Visa") {
            for (var iv = 1; iv <= 5; iv++) {
                if ($("#Mission" + iv + "_label").is(':visible')) {
                    $("#Mission" + iv + "_listbox > .k-item:contains('Consulate - Casablanca')").click();
                }
            }
        }

        // Existing code to show the error and submit the form
        window.location.href = `javaScript:ShowError('لا تضغط على الزر انت مفعل الضغط التلقائي ')`;
  var isEnabled = localStorage.getItem('isEnabled') === 'true';
    if (isEnabled) {
        var slmval = setInterval(function() {
            var btnSubmit = document.querySelector("#btnSubmit");
            if (btnSubmit && !btnSubmit.disabled) {  // Check if the button exists and is not disabled
                btnSubmit.click();
                clearInterval(slmval);
            }
        }, 2000);
         }

        setInterval(() => {
            document.querySelector("#commonModal > div > div > div.modal-footer > button").click();
        }, 1000);
   
});
