let imga = document.querySelector('.imgar');
let coloras = document.querySelector('.container');
let linkt =document.querySelector('.linkt');
let logo = document.querySelector('.logo i');
let linktbg = document.querySelector('.linkt');

function phone(imgar){
    imga.src= imgar;
}


function colora(container) {
    coloras.style.background= container;
}

function logoa(logooo){
    logo.style.color= logooo; 
    linkt.style.color= logooo;
    
}

function linkbga(lbga){
    linktbg.style.background = lbga;
}