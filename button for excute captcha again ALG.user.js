// ==UserScript==
// @name         button for excute captcha again ALG
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.blsspainmorocco.net/MAR/blsappointment/manageappointment*
// @match        https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment*

// @icon         https://www.google.com/s2/favicons?sz=64&domain=blsspainmorocco.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var urlCaptcha="/DZA/CaptchaPublic/GenerateCaptcha?data=Jjar7HDMrYjqcKewUqrk06pV9GIp2EJiqBwseP9NXsvdCOgRqEwC3n3n7nAeTxEZiufiBsNFIzyNejZINhdHDxAYSHwtapYQb%2bJXbJh9QY4%3d";
    $.ajax({
        type: "GET",
        url: urlCaptcha,
        //dataType: "json",
        success: function (data)
        {
            var urlSubmit ="/DZA/CaptchaPublic/SubmitCaptcha";
            data ={
                'SelectedImages':'njvpuvd,voxplqsqz,lhnemd',
                'Id':'Jjar7HDMrYjqcKewUqrk06pV9GIp2EJiqBwseP9NXsvdCOgRqEwC3n3n7nAeTxEZiufiBsNFIzyNejZINhdHDxAYSHwtapYQb+JXbJh9QY4=',
                'Captcha':'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',
                '__RequestVerificationToken':'CfDJ8OMsLGClZV1OjqXW0LRvyzzb8d385d-N-1afPzUhRSZqBhSFkO4IgxBJYYJ2-2Dj5kEPEwrWAp6gGHs69lVCQ6TfyO3SVg_0uKLxiy68KQ9owTCA0udvjtgvVU5Fq6ybZsBq-k2gllbNLIhRcT3-6iRDtsFjkwF7RS1pedjP72XMp8pef39igjBlKHGTguvP1g',
                'X-Requested-With':'XMLHttpRequest'
            };
            $.ajax({
                type: "POST",
                data:data,
                url: urlSubmit,
                dataType: "json",
                success: function (data)
                {
                    $("#CaptchaData").val(data.captcha);
                    $("#CaptchaId").val('9e06e414-0a4f-41b0-ac63-909bb58fe58c');
                    console.log(data);
                    $("btnVerifyAppointment").hide();
                    $("#btnSubmit").show();
                    document.querySelector("#global-overlay > div").show();
                    // $('.alert-warning').remove();

                //   $("#btnSubmit").click();
                }
            });
        }
    });


    // Create a button and append it to the body
    var newButton = $("<button>")
        .text("Execute Function")
        .click(executeFunction);

    // Append the button to the body or any specific element
     $("#btnSubmit").after(newButton);

})();