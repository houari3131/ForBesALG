// ==UserScript==
// @name         Add Buttons and Set localStorage capatcha
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add buttons to a specific area and set localStorage value when clicked
// @author       You
// @match        https://www.blsspainmorocco.net/MAR/NewCaptcha/GenerateCaptcha
// @match        https://algeria.blsspainglobal.com/DZA/NewCaptcha/GenerateCaptcha
// @grant        none
// ==/UserScript==

(function() {
  //var append_container = document.querySelector("#div-main > div > div > div.bg-mode.shadow.rounded-3.overflow-hidden.p-3.col-md-4 > form")

    var append_container = document.querySelector("#main-content > div.row.text-center.p-3");
//   var append_container =   document.querySelector("body > header > nav.navbar.navbar-expand-xl.z-index-9.navbar-divider > div")


    // Create three buttons
    var button1 = document.createElement("button");
    button1.textContent = "Normal";
    button1.style.borderRadius = "80px";
    button1.style.marginRight = "5px"; // تغيير المسافة بين الأزرار
    button1.style.color = "#ca9330";
    button1.style.fontWeight = "bold";

    var button2 = document.createElement("button");
    button2.textContent = "Premium";
    button2.style.borderRadius = "80px";
    button2.style.marginRight = "5px"; // تغيير المسافة بين الأزرار
    button2.style.color = "#ca9330";
    button2.style.fontWeight = "bold";

    var button3 = document.createElement("button");
    button3.textContent = "Prime Timee";
    button3.style.borderRadius = "80px";
    button3.style.marginRight = "5px"; // تغيير المسافة بين الأزرار
    button3.style.color = "#ca9330";
    button3.style.fontWeight = "bold";

    // Add event listeners
    button1.addEventListener("click", function() {
        localStorage.setItem('category', 'Normal');
        var Client ={
 category : ('Normal'),
};
 var mCaty ;
 var vsN=0;
 var vsNl=0;
for(var i=1;i<=5;i++)
{

const caty =$('#AppointmentCategoryId' + i + '_label');



//...................
if(caty.is(':visible'))
{
    $("#AppointmentCategoryId"+i+"_listbox > .k-item:contains('"+Client.category+"')").click();
    mCaty = document.querySelector("#AppointmentCategoryId"+i).value;
   }
}
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    button2.addEventListener("click", function() {
        localStorage.setItem('category', 'Premium');
        var Client ={
 category : ('Premium'),
};
 var mCaty ;
 var vsN=0;
 var vsNl=0;
for(var i=1;i<=5;i++)
{

const caty =$('#AppointmentCategoryId' + i + '_label');



//...................
if(caty.is(':visible'))
{
    $("#AppointmentCategoryId"+i+"_listbox > .k-item:contains('"+Client.category+"')").click();
    mCaty = document.querySelector("#AppointmentCategoryId"+i).value;
   }
}
    });
    /////////////////////////////////////////////////////////////////////////////////////////////////

    button3.addEventListener("click", function() {
        localStorage.setItem('category', 'Prime Time');
             var Client ={
 category : ('Prime Timee'),
};
 var mCaty ;
 var vsN=0;
 var vsNl=0;
for(var i=1;i<=5;i++)
{

const caty =$('#AppointmentCategoryId' + i + '_label');



//...................
if(caty.is(':visible'))
{
    $("#AppointmentCategoryId"+i+"_listbox > .k-item:contains('"+Client.category+"')").click();
    mCaty = document.querySelector("#AppointmentCategoryId"+i).value;
   }
}
    });

    // Append buttons to the container
    append_container.prepend(button1);
    append_container.prepend(button2);
    append_container.prepend(button3);
})();

