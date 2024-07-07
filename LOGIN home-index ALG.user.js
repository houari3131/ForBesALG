// ==UserScript==
// @name         LOGIN home/index ALG
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://algeria.blsspainglobal.com/dza/home/index*

// @icon         https://www.google.com/s2/favicons?sz=64&domain=blsspainglobal.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


//document.addEventListener("DOMContentLoaded", function()
    {
    // قم بفحص عنوان URL الحالي
    var currentURL = window.location.href;

    // افحص إذا كان العنوان الحالي يحتوي على نص معين لتحديد موقع معين
    if (currentURL.includes("https://algeria.blsspainglobal.com/dza/home/index")) {
        // استخدم window.location.href لتحديد عنوان URL الجديد
        window.location.href = "https://algeria.blsspainglobal.com/DZA/account/login";
    }
};
})();