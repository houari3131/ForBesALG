// ==UserScript==
// @name         botton uploid photo ALG
// @namespace    http://tampermonkey.net/
// @version      2024-02-17
// @description  try to take over the world!
// @author       You
// @match        https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blsspainmorocco.net
// @grant        none
// ==/UserScript==

(function() {
     var append_container =document.querySelector("#myForm > div:nth-child(32) > div > label")
        var UploadPhoto = document.createElement("button");
     UploadPhoto.textContent = "Upload Photo";
UploadPhoto.style.position = "fixed";
   UploadPhoto.style = "border-radius: 80px;margin-right : 140px;color : #ca9330; font-weight:bold ;";
 document.body.appendChild(UploadPhoto);
append_container.prepend(UploadPhoto);
       UploadPhoto.style.cursor = 'pointer';
UploadPhoto.addEventListener("click", function () {
       uploadImage();
     });
})();