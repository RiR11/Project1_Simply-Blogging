"use strict";
const $= selector => document.querySelector(selector);

const publish= evt =>{

const bHeading = $("#headline").value;
const bText=$("#bpost").value;


let isValid=true;

if(bHeading=="")  {
    $("#headError").textContent ="Blog headline is required."
    isValid=false;
}
else {
    $("#headError").textContent= "";
}

function trimTextarea(str) 
{ 
    return str.replace(/^\s+|\s+$/g,''); 
}

if(trimTextarea(bText) == '')
{
    $("#btextError").textContent ="Blog can not be empty. Blog text is required."
    isValid=false;
}
else {
    $("#btextError").textContent= "";
}


if(!isValid){
    evt.preventDefault();
}
};

document.addEventListener("DOMContentLoaded",()=>{
$("#postb").addEventListener("click",publish);

$("#headline").focus();
});
