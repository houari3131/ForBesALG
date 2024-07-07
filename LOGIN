// ==UserScript==
// @name         2 LogiNs v2:::::::::::::::::::::::::::::::::::::::::::::::::::::::
// @namespace    http://tampermonkey.net/
// @version      5
// @author       Devteamscripts
// @match        https://algeria.blsspainglobal.com/*/*og*n*
// @match       https://algeria.blsspainglobal.com/DZA/account/login*
// @match       https://algeria.blsspainglobal.com/DZA/account/Login
// @grant        none
// ==/UserScript==

(function() {
  //  $("btnVerify").click();
  //  document.querySelector("#btnVerify").click();
 localStorage.setItem('email', localStorage.getItem('email'));
localStorage.setItem('password', localStorage.getItem('password'));
localStorage.setItem('passwordOTP', localStorage.getItem('passwordOTP'));
localStorage.setItem('category', localStorage.getItem('category'));
localStorage.setItem('familyOfMembers', localStorage.getItem('familyOfMembers'));
localStorage.setItem('location', localStorage.getItem('location'));
localStorage.setItem('visatype', localStorage.getItem('visatype'));
localStorage.setItem('visaSubtype', localStorage.getItem('visaSubtype'));
localStorage.setItem('linkimg', localStorage.getItem('linkimg'));
localStorage.setItem('SELFI01', localStorage.getItem('SELFI01'));
localStorage.setItem('SELFI02', localStorage.getItem('SELFI02'));
localStorage.setItem('autoForm', 'true');

var Client = {
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password')
};

var elmpass;

var pageLocation = window.location.href.toUpperCase();
$(document).ready(function() {
    if (pageLocation.indexOf("/DZA/account/Login?timeOut=True".toUpperCase()) > -1) {
        window.location.href = "/DZA/account/loginPost";
    }
});

localStorage.setItem("TOKEN", $('input:hidden[name="__RequestVerificationToken"]').val());
var scripLogin = document.createElement("script");
scripLogin.innerHTML =
`
function VerifyCaptcha(e, obj) {
    var win = GetMainWindow();
    localStorage.setItem("dataCaptcha", '');
    var title = 'Verify Selection';
    win.iframeOpenUrl = '/DZA/NewCaptcha/GenerateCaptcha';
    win.OpenWindow({ Title:title, Width: 400, Height: 600 });
    return false;
}
function OnVerifyCaptcha(res) {
    if (res.exceeded) {
        window.location.href = window.location.href.split("?")[0];
        return false;
    }
    else if (res.success) {

        console.log(res.cd);
        localStorage.setItem("dataCaptcha", encodeURIComponent(res.cd));
        window.location.href = "/DZA/bls/vt?data="+localStorage.getItem("dataCaptcha");


    }
}
//............................
var onAjaxSuccess = function (res) {
    if (res.success) {
     window.location.href = "/DZA/bls/vtv3027";


       // VerifyCaptcha();
         window.location.href = "/DZA/bls/vtv3027";
       return false;
    }
    else if(res.error ==="This account is locked due to unauthorized access. Please try again after some time")

       {

           const msg = document.createElement("center");
           msg.style="background:#7722dd;color:#fff;";
           msg.innerHTML="This account is locked due to unauthorized access. Please try again after some time";
           document.querySelector("body").prepend(msg);
       }
    else
    {
       // window.location.href =window.location.href;
    }
};
//=============================
var onAjaxFailed = function (context, res) {
    if (context.status === 400 || context.status === 403) {

        document.querySelector("form").action = '/DZA/account/logInPost';
    }
    else {
        //alert('An un expected error occured. Please try again later');
        //window.location.href = window.location.href;
    }
};

//=================================
`;
document.querySelector("body").append(scripLogin);

//============================
function byPassCaptcha()
{
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
                '__RequestVerificationToken':$('input:hidden[name="__RequestVerificationToken"]').val(),
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
                    $("#btnSubmit").show();
                    $("#btnSubmit").click();
                    loginReqest('9e06e414-0a4f-41b0-ac63-909bb58fe58c',data.captcha)

                }
            });
        }
    });
}
byPassCaptcha("login");
const inputs = document.querySelectorAll('input[type="text"]');
let requiredInput = null;
for (let i = 0; i < inputs.length; i++)
{
    if (inputs[i].hasAttribute('required'))
    {
        requiredInput = inputs[i];
        break;
    }
}

const inputtts = document.querySelectorAll('input[type="password"]');
let requiredInputtt = null;
for (let i = 0; i < inputtts.length; i++)
{
    if (inputtts[i].hasAttribute('required'))
    {
        requiredInputtt = inputtts[i];
        break;
     }
}
elmpass=requiredInputtt;
requiredInput.value=Client.email;
requiredInputtt.value=Client.password;
var _0x541f06 = setInterval(_0x3c1ddc, 0x64);

 function _0x3c1ddc() {
      if ($("#btnSubmit").is(":visible")) {
        $("#btnSubmit").click();
        clearInterval(_0x541f06);
      }
    }
})();
