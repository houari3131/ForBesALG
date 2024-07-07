// ==UserScript==
// @name         DELET OTP  02
// @namespace    http://tampermonkey.net/
// @version      2024-05-26
// @description  try to take over the world!
// @author       You
// @match        https://algeria.blsspainglobal.com/DZA/*ccount/*og*n*
// @match        https://algeria.blsspainglobal.com/DZA/*ls/vt*
// @match        https://algeria.blsspainglobal.com/DZA/NewCaptcha/GenerateCaptcha

// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // تعديل الرابط والبيانات المرسلة حسب الحاجة
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('passwordOTP');

    if (!email || !password) {
        console.error('Email or password is not set in localStorage');
        return;
    }

    // إرسال طلب POST إلى السيرفر المحلي
    const url = 'http://localhost:3001/deleteAllOtps'; // تأكد من تطابق المسار مع الخادم
     //const url = 'http://localhost:4000/deleteAllOtps'; //
    // const url = 'https://bbc7-105-235-137-178.ngrok-free.app/deleteAllOtps'; //

    const data = JSON.stringify({ email, password });

    let retryCount = 0;
    const maxRetries = 6; // تعيين الحد الأقصى لعدد المحاولات

    function sendRequest() {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
        .then(response => response.text())
        .then(text => {
            console.log('Response:', text);
            // إذا كان الرد "No new emails with OTP found. Retrying..."
            if (text.trim() === 'No new emails with OTP found. Retrying...') {
                if (retryCount < maxRetries) {
                    retryCount++;
                    console.log('Retrying after a delay...');
                    setTimeout(sendRequest, 2000); // إعادة المحاولة بعد فترة زمنية
                } else {
                    console.log('Reached maximum retries. Stopping script.');
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            // في حالة حدوث خطأ، قم أيضًا بإعادة المحاولة بعد فترة زمنية
            if (retryCount < maxRetries) {
                retryCount++;
                console.log('Retrying after a delay...');
                setTimeout(sendRequest, 2000); // إعادة المحاولة بعد فترة زمنية
            } else {
                console.log('Reached maximum retries. Stopping script.');
            }
        });
    }

    sendRequest();
})();
