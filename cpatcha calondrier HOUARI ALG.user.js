// ==UserScript==
// @name         cpatcha calondrier HOUARI ALG
// @namespace    http://tampermonkey.net/
// @version      2024-02-16
// @description  try to take over the world!
// @author       You
// @match        https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment*
// @match        https://algeria.blsspainglobal.com/DZA/*ccount/*og*n*
// @match        https://www.blsspainmorocco.net/*/blsappointment/manageappointment*
// @grant        none
// ==/UserScript==

// الكود الخاص بالزر الثالث
        console.log("Button 3 clicked");
       function Captchaseg()
{
document.querySelector("#CaptchaId").value='bfee4479-968d-45e8-a6ec-882d6010a1af';
$.ajax({
  url: '/DZA/CaptchaPublic/SubmitCaptcha',
  crossDomain: true,
  method: 'post',
  headers: {
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'x-requested-with': 'XMLHttpRequest'
  },
  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  data: {
    'SelectedImages': 'xrfitc,nlgimmka,fwhavlf,snknmewwo',
    'Id': '4cpYqYMj+ujoroTYm98A6HcG2C4nhQuctawifm//c0q26VGPgvC+/nf3B6C8slObgWhMtzkjBvb7Oz3eCI42PRphAPLBheRTH+OCAaSMH0c=',
    'Captcha': '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',
    '__RequestVerificationToken': $('input:hidden[name="__RequestVerificationToken"]').val(),
    'X-Requested-With': 'XMLHttpRequest'
  }
}).done(function(response) {
  console.log(response);
  if(response.success == true)
  {
     document.querySelector("#CaptchaData").value=response.captcha;
  }
});
}
        Captchaseg()