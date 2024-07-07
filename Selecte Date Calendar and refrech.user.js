// ==UserScript==
// @name         Selecte Date Calendar and refrech
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description
// @author       Your Name
// @match        https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment*
// @match        https://spain.blscn.cn/CHN/blsAppointment/ManageAppointment*
// @match        https://algeria.blsspainglobal.com/*/blsappointment/manageappointment/*
// @match        https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment/*
// @grant        none
// ==/UserScript==



var CasaNatArray = ["2024-07-01", "2024-07-02", "2024-07-03", "2024-07-04", "2024-07-05"],
    CasaShengenArray = ["2024-07-01", "2024-07-02", "2024-07-03", "2024-07-04"],
    RabatArray = ["2024-07-01", "2024-07-02", "2024-07-03", "2024-07-04"],
    TetouanArray = ["2024-07-01", "2024-07-02", "2024-07-03", "2024-07-04", "2024-07-05"],
    NadorArray = ["2024-07-01", "2024-07-02", "2024-07-03", "2024-07-04", "2024-07-05"],
    TangierArray = ["2024-07-01", "2024-07-02", "2024-07-03", "2024-07-04", "2024-07-05"],
    AgadirArray = ["2024-07-01", "2024-07-02", "2024-07-03", "2024-07-04", "2024-07-05"];



setTimeout(function() {document.querySelector("#userConsent > div > div > div.modal-footer > button.btn.btn-success").click();}, 100);
    setTimeout(function() { document.querySelector("#scamAlert > div > div > div.modal-header > button").click()}, 600);
 $("#btnSubmit").show();
 $("#btnVerifyEmail").show();
  $("#btnVerifyAppointment").show();
    //===================================
     //===================================================================================================
var timeID;
var dateID;
//+++++++++++

   function OnAppointmentdateChangex() {

        var applicantCount = $("#ApplicantsNo").val();
        if (applicantCount == '' || applicantCount == null || applicantCount == undefined) {
            applicantCount = 1;
        }
        var ad = $("#"+dateID).data("kendoDatePicker").value();
        var slot = $("#"+timeID).data("kendoDropDownList");
        slot.value("");
        slot.setDataSource([]);
        if (ad === null || ad === '' || ad === undefined) {
            slot.value("");
            slot.enable(false);
            return false;
        }
        var appointmentDate = kendo.toString(ad, 'yyyy-MM-dd');
        var locationId = $("#LocationId").val();
        var mid = $("#MissionId").val();
        var categoryId = $("#AppointmentCategoryId").val();
        var ds = "WEB_BLS";
        var visaType = $("#VisaType").val();
        var visasubType = $("#VisaSubTypeId").val();
        var cd2 = $("#CaptchaData2").val();
        ShowLoader();
        var data = {
            LocationId : locationId,
            AppointmentCategoryId : categoryId,
            AppointmentDate : appointmentDate,
            ApplicantsNo : applicantCount,
            VisaType : visaType,
            VisaSubType : visasubType,
            MissionId: mid,
            DataSource: ds,
            CaptchaData2:cd2
        };
        $.ajax({
            type: "POST",
            data: data,
            url: "/DZA/blsappointment/GetAvailableSlotsByDate",
            dataType: "json",
            success: function (d) {
                HideLoader();
                slotDataSource = d;
                slot.enable(true);
            }
        });
    }

function getElementsId()
    {

        for (let i = 1; i <= 10; i++)
        {
          const elementId = 'AppointmentDate' + i ;
          const element = $('#' + elementId);
          if (element.is(':visible'))
          {
            dateID=elementId;
          }
        }
        var ids = ['AppointmentSlot1', 'AppointmentSlot2', 'AppointmentSlot3', 'AppointmentSlot4', 'AppointmentSlot5'];
        ids.forEach(function(id)
        {
            var element = $(".k-widget.k-dropdown.form-control[aria-owns='" + id + "_listbox']");
            if (element.is(":visible")) {
                timeID = "AppointmentSlot" + id.slice(15);}});
    }

function getLocationId(lox)
{
    var locationName="";
    switch(lox)
    {

        case "beae2d19-89a9-46e7-9415-5422adafe619":
            locationName = "Casablanca";
            break;
        case "ab828ce6-d1b3-46e0-8e91-8ffa27d2b6d7":
            locationName = "Schengen Visa";
            break;
        case "ec498f00-5a86-4b2e-bca7-7a6b5b8b1d52":
            locationName = "National Visa";
            break;
        case "ccd817eb-c023-4eff-aac9-f6c394e7427f":
            locationName = "Student Visa";
            break;
        case "fbf41aee-a425-46fa-a0a7-2b9845ac8b0c":
            locationName = "Family Reunification Visa";
            break;
        case "0c6445de-03f8-4a52-92ae-a3f647e6644c":
            locationName = "Work Visa";
            break;
        case "0dfd7a9e-0c5b-4cfc-9210-f5d9ce62960c":
            locationName = "Schengen Visa Previous Visa Holder";
            break;
        case "75f85296-9341-4618-a9ac-3b70f1f454d5":
            locationName = "Schengen Visa First Demand";
            break;
        case "c805c157-7e8f-4932-89cf-d7ab69e1af96":
            locationName = "Schengen Visa";
            break;
        case "fb33a698-a3bd-4b02-8ef7-b589775187df":
            locationName = "National Visa";
            break;
        case "4792c812-5088-4044-b13b-6abb4a0fa5bf":
            locationName = "Casa 2";
            break;
        case "ef92eec6-db32-437b-9291-0ee746b5a03b":
            locationName = "Casa 1";
            break;
        case "8b6f8ee2-d516-49fe-be38-226a1bd6d97e":
            locationName = "Casa 3";
            break;
        case "5c2e8e01-796d-4347-95ae-0c95a9177b26":
            locationName = "Normal";
            break;
        case "37ba2fe4-4551-4c7d-be6e-5214617295a9":
            locationName = "Premium";
            break;
        case "15044668-9bb4-477d-918b-4809370190b9":
            locationName = "Prime Time";
            break;
        case "60d2df036755e8de168d8db7":
            locationName = "Casablanca";
            break;
        case "0566245a-7ba1-4b5a-b03b-3dd33e051f46":
            locationName = "Nador";
            break;
        case "8d780684-1524-4bda-b138-7c71a8591944":
            locationName = "Rabat";
            break;
        case "889689b5-1099-4795-ac19-c9263da23252":
            locationName = "Tetouan";
            break;
        case "8457a52e-98be-4860-88fc-2ce11b80a75e":
            locationName = "Tangier";
            break;
        case "138660df-f645-488f-8458-97186b17c7f9":
            locationName = "Agadir";
            break;
        //-----------------------------------------
    }
    return locationName +"   -   ";
}
//----------------------------------------------------------------

var datevide= false;
function LoadDates(d, t)
{

    var locationIdfff =  getLocationId( $("#LocationId").val());
    var midfff = getLocationId($("#MissionId").val());
    var categoryIdfff = getLocationId($("#AppointmentCategoryId").val());
    var visaTypefff = getLocationId($("#VisaType").val());
    var visasubTypeff = getLocationId($("#VisaSubTypeId").val());
    var data = availDates;
   var  allowedDatesx = data.ad;
   if (allowedDatesx !== null && allowedDatesx.length > 0) {
                    const available = allowedDatesx.filter(x => x.AppointmentDateType === 0);
                    if (available === null || available.length<1)
                    {
                      appDatex.enable(true);
                     // datevide=true;
                        return false;
                    }
                var teeBoot ="";
                var dateArr=[];
                var dateArr2;
                $.each(available, function (index, value) {
                    dateArr.push(value.DateText);
                     dateArr2 = value.DateText;
                     teeBoot=teeBoot+" "+value.DateText;
                });
                ShowError(teeBoot);
                if(visasubTypeff !== "fb33a698-a3bd-4b02-8ef7-b589775187df")
                {
                       sendMessage(locationIdfff +midfff+categoryIdfff+visaTypefff+visasubTypeff+ teeBoot);
                }
                var randomValue = dateArr[Math.floor(dateArr.length * Math.random())];
                 var appDatel = $("#AppointmentDate"+d).data("kendoDatePicker");
                appDatel.value(randomValue);
                OnAppointmentdateChange();
    }
    else
    {
              // datevide=true;
              var appDatex = $("#AppointmentDate"+d).data("kendoDatePicker");
               appDatex.enable(true);
    }
}
//=======================================================
function LoadBlockDates(d, t)
{
  var  allowedListDate=[];
 if ($("#LocationId").val() == "889689b5-1099-4795-ac19-c9263da23252") {
        allowedListDate = TetouanArray;
    }
    if ($("#LocationId").val() == "8d780684-1524-4bda-b138-7c71a8591944") {
        allowedListDate = RabatArray;
    }
    if ($("#LocationId").val() == "0566245a-7ba1-4b5a-b03b-3dd33e051f46") {
        allowedListDate = NadorArray;
    }
    if ($("#LocationId").val() == "8457a52e-98be-4860-88fc-2ce11b80a75e") {
        allowedListDate = TangierArray;
    }
    if ($("#LocationId").val() == "138660df-f645-488f-8458-97186b17c7f9") {
        allowedListDate = AgadirArray;
    }
    if ($("#VisaSubTypeId").val() == "fbf41aee-a425-46fa-a0a7-2b9845ac8b0c") {
        allowedListDate = CasaNatArray;
    }
    if ($("#VisaSubTypeId").val() == "8b6f8ee2-d516-49fe-be38-226a1bd6d97e") {
        allowedListDate = CasaShengenArray;
    }
    if ($("#VisaSubTypeId").val() == "4792c812-5088-4044-b13b-6abb4a0fa5bf") {
        allowedListDate = CasaShengenArray;
    }
    if ($("#VisaSubTypeId").val() == "ef92eec6-db32-437b-9291-0ee746b5a03b") {
        allowedListDate = CasaShengenArray;
    }
    if ($("#VisaSubTypeId").val() == "ccd817eb-c023-4eff-aac9-f6c394e7427f") {
        allowedListDate = CasaNatArray;
    }
    if ($("#VisaSubTypeId").val() == "0c6445de-03f8-4a52-92ae-a3f647e6644c") {
        allowedListDate = CasaNatArray;
    }
    if ($("#VisaSubTypeId").val() == "ec498f00-5a86-4b2e-bca7-7a6b5b8b1d52") {
        allowedListDate = CasaNatArray;
    }

    var appDateList = $("#AppointmentDate"+d).data("kendoDatePicker");
    appDateList.value("");

   if ( allowedListDate.length > 0)
   {
        const arrayListDate =[];
        $.each(allowedListDate, function (index, value) {
            arrayListDate.push(value);
       });
       //-------------------------------------------
       var randomList = arrayListDate[Math.floor(arrayListDate.length  * Math.random())];
       document.querySelector("#AppointmentDate"+d).value=randomList;
       appDateList.value(randomList);
       OnAppointmentdateChange();
   }
   else
   {
         appDateList.enable(true);
   }
}
//==========================================================================
function getloc()
{
   var bbs ="";
	switch($("#LocationId").val())
	{
		case "60d2df036755e8de168d8db7":
	       	bbs = "Casablanca";
		break;
		case "889689b5-1099-4795-ac19-c9263da23252":
	        	bbs = "Tetouan";
		break;
	}
	 return bbs;
}
//==========================================================================
function sendMessage(text) {
    var temsg=  "BLS ON ALG   :"+text;
    const msg = encodeURIComponent(temsg +" ON")

      fetch('https://api.telegram.org/bot7373477501:AAFrSLeWYaKL3kFbch-38rlAjj6AwVCf00k/sendMessage?chat_id=-1002182656332&text='+msg);
    }
//==================================================
    $(document).ready(function () {
     getElementsId();
    var reflshx =setInterval(function () {
    if(datevide == true)
    {
         if(document.querySelector("#progress-percent").textContent ==='0%' && $("#appointmentDetailsDiv").is(":visible")==true)
        {
              LoadBlockDates(dateID.slice(15),timeID.slice(15));
        }
        else
        {
             clearInterval(reflshx);
        }
    }

    }, 3000);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (typeof $ === 'undefined') {
        console.error('jQuery is not loaded.');
        return;
    }
    // إنشاء الأنماط وإضافتها إلى الصفحة
    var style = document.createElement('style');
    style.innerHTML = `
        .custom-button {
            border-radius: 40px;
            margin-right: 10px;
            padding: 10px 20px;
            color: #fff;
            font-weight: bold;
            background: linear-gradient(to bottom, #ff7eb9, #ff65a3);
            border: none;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: background 0.3s;
        }
        .custom-button:hover {
            background: linear-gradient(to bottom, #ff65a3, #ff4f8b);
        }
        .custom-button.on {
            background: linear-gradient(to bottom, #00ff00, #00cc00);
        }
    `;
    document.head.appendChild(style);
  // var append_container = document.querySelector("#appointmentDetailsDiv > div.card-header.border-bottom");
    var append_container = document.querySelector("body > main > section > div > div.vstack.gap-4 > div.bg-light.rounded.p-3");

    function createButton(text, functionName) {
        var button = document.createElement("button");
        button.textContent = text;
        button.className = "custom-button";
        button.addEventListener("click", function () {
            functionName(button); // تمرير الزر كوسيط
        });
        append_container.appendChild(button);
    }
    // التحقق من وجود العنصر قبل إضافة الأزرار
    if (append_container) {
        // إنشاء الأزرار مع تحديد النص والدالة الخاصة بكل زر
        createButton("Upload Photo", uploadImage);
        createButton("Get Otp", GetOtp);
        createButton("Try Capatcha", function3);
        createButton("Category: Normal", toggleCategory); // النص الأولي مع الحالة الأولى
        createButton("Refresh off", toggleRefresh); // الحالة الأولى هي "Refresh off"
        createButton("Get Form", GetForm);
        createButton("Resend Otp", ResendOtp);

    }
    // تعريف الدوال الخاصة بكل زر
    function uploadImage() {
        // الكود الخاص برفع الصورة
       function img() {
$("#ApplicantPhotoId").val(localStorage.linkimg);
                 //https://algeria.blsspainglobal.com//DZA/query/getfile?fileid=" + localStorage.photoId
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
        console.log("Upload Photo clicked");
    }
async function GetOtp(){
       async function getOTPOnly() {
        console.log("getONLY");
        var otp
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email":  localStorage.getItem('email'),
            "password": localStorage.getItem('passwordOTP'),
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
  let otp = await getOTPOnly(); // Fetching the OTP code
        document.querySelector("#EmailVerificationCode").value = otp; // Automatically filling the OTP code
}
    function function3() {
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
    }
    let categoryStates = ['Normal', 'Premium', 'Prime Time'];
    let currentCategoryIndex = 0;
    function toggleCategory(button) {
        let selectedCategory = categoryStates[currentCategoryIndex];
        console.log("Selected Category: " + selectedCategory);
        if (selectedCategory === 'Normal') {
            $("li.k-item:contains('Normal')").click();
        } else if (selectedCategory === 'Premium') {
            $("li.k-item:contains('Premium')").click();
        } else if (selectedCategory === 'Prime Time') {
            $("li.k-item:contains('Prime Time')").click();
        }
        // تحديث النص على الزر
        button.textContent = "Category: " + selectedCategory;
        // تحديث الحالة التالية
        currentCategoryIndex = (currentCategoryIndex + 1) % categoryStates.length;
    }
    let refreshInterval;
    function toggleRefresh(button) {
        // تبديل حالة الزر بين "Refresh off" و "Refresh on"
        if (button.textContent === "Refresh off") {
            button.textContent = "Refresh on";
            button.classList.add("on"); // إضافة فئة "on" لتغيير اللون
           datevide =true;
          //  startRefreshFunction();// بدء تنفيذ الدالة
        } else {
            button.textContent = "Refresh off";
            button.classList.remove("on"); // إزالة فئة "on" لإعادة اللون الأصلي
          datevide =false;
            //  stopRefreshFunction(); // إيقاف تنفيذ الدالة
        }
    }
    function startRefreshFunction() {
        // الكود الخاص بالدالة التي تريد تنفيذها عندما يكون الزر في حالة "on"
        console.log("Refresh function started");
        refreshInterval = setInterval(() => {
            console.log("Refreshing...");
            // أضف هنا الكود الذي تريد تنفيذه بشكل دوري
        }, 1000); // تنفيذ الكود كل ثانية (يمكنك تغيير القيمة حسب الحاجة)
    }
    function stopRefreshFunction() {
        // الكود الخاص بإيقاف الدالة عندما يكون الزر في حالة "off"
        console.log("Refresh function stopped");
        clearInterval(refreshInterval);
    }
    function GetForm() {
        // الكود الخاص بالزر السادس
      if(document.querySelector("#progress-percent").textContent ==='25%' || document.querySelector("#progress-percent").textContent ==='50%')
        {
           window.location.href=`javaScript:
            var mmrdbok =$("html").html().split("/DZA/BlsAppointment/vaf/")[1];
             spdodi5 = mmrdbok.split("?appointmentId=")[0];
           $("#applicantDetailsDivForm").load('/DZA/BlsAppointment/vaf/'+spdodi5+'?appointmentId=' + $("#Id").val());
            onAgree();`;
            console.log("del block");
        }
        console.log("Button 6 clicked");
    }



        async function ResendOtp(button){

      button.classList.add("on");
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
    var otp = await getOTPOnly(); // Fetching the OTP code
        document.querySelector("#EmailVerificationCode").value = otp; // Automatically filling the OTP code
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
        }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var sbClick =0;
     var senedDate = setInterval(() => {
        if(document.querySelector("#progress-percent").textContent ==='0%' && $("#appointmentDetailsDiv").is(":visible")==true)
        {
            if($("#ApplicantPhotoId").val() !=='' && document.querySelector("#EmailVerificationCode").value.length == 6  && $("#CaptchaData").val() !== "")
            {
               LoadDates(dateID.slice(15),timeID.slice(15));
                 clearInterval(senedDate);
            }
        }
         else
         {
             clearInterval(senedDate);
         }
    }, 100);
    var sened = setInterval(() => {
        if(document.querySelector("#progress-percent").textContent ==='0%' && $("#appointmentDetailsDiv").is(":visible")==true)
        {
            console.log("find time");
            //..............................................
            if($("#ApplicantPhotoId").val() !=='' && $('#'+timeID).val() !=='' && $('#'+dateID).val() !=='' && document.querySelector("#EmailVerificationCode").value.length == 6 && $("#CaptchaData").val() !== "")
            {
                if(sbClick < 1)
                {
                    datevide =false;
                    sbClick ++;
                 $('#btnSubmit').click();
                    clearInterval(sened);
                }
            }
            //................................................
            if($('#'+dateID).val() !=='' && $('#'+timeID).val() ==='')
            {
                     $('#'+timeID).click();
                     var randoxmd = Math.floor($(".slot-item.bg-success").length * Math.random());
                     $($(".slot-item.bg-success")[randoxmd]).click();
            }
            //...........................
            if($('#'+dateID).val() !==''&& $(".slot-item.bg-success").length > 1)
            {
                //$('#'+timeID).click();
                $(".slot-item.bg-success").last().click();
                var randoxm = Math.floor($(".slot-item.bg-success").length * Math.random());
                $($(".slot-item.bg-success")[randoxm]).click();
            }
        }
        else
        {
            clearInterval(sened);
        }
    }, 50);
    });