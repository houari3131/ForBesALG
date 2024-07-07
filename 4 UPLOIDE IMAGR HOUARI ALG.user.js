// ==UserScript==
// @name         4 UPLOIDE IMAGR HOUARI ALG
// @namespace    http://tampermonkey.net/
// @version      7,5
// @author       Devteamscripts
// @match        https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment*
// @grant        none
// ==/UserScript==
'use strict';

/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
/*$$ IMAGES LINKS $$ IMAGES LINKS $$*/
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

function img() {
$("#ApplicantPhotoId").val(localStorage.linkimg);
       var imageUrl = "https://algeria.blsspainglobal.com//DZA/query/getfile?fileid=" + localStorage.linkimg;
        const fileInput = document.getElementById('uploadfile-1');
        var xhr = new XMLHttpRequest();
        xhr.open("GET", imageUrl, true);
        xhr.responseType = "blob";
        xhr.onload = function() {
            if (xhr.status === 200) {
                var blob = xhr.response;
                var fd = new FormData();
                fd.append('file', blob, "image.jpg");
                $.ajax({
                    url: "/DZA/query/uploadprofileImage",
                    type: 'post',
                    data: fd,
                    contentType: false,
                    processData: false,
                    success: function(result) {
                        if (result.success) {
                            $("#uploadfile-1-preview").attr("src", "/DZA/query/getfile?fileid=" + result.fileId);
                            $("#ApplicantPhotoId").val(result.fileId);
                        } else {
                            alert(result.err);
                        }
                    }
                });
            }
            else if (xhr.status === 502) {
               img();
            }
             else if (xhr.status === 504) {
               img();
       }
            else {
                alert("Failed to retrieve the image from the URL.");
            }
        };
        if (imageUrl.length >= 1) {
            xhr.send();
        }
}
img();