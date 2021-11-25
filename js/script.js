
let radioGroup = document.querySelectorAll('.mainDiv');
let radio = document.querySelectorAll('.radio');
let inside = document.querySelectorAll('.insideRadio');

const html ={
    get(element){
        return document.querySelector(element);
    }
} 

  function remove(){
     for(let i = 0; i < radio.length; i++){
        radio[i].style.border = '3px solid grey'; 
        inside[i].style.background = 'none';
        radioGroup[i].style.background = 'none';

     }

  }
    for (let i = 0; i < radio.length; i++){
        radio[i].addEventListener('click', ()=>{
            remove();
             radio[i].style.border = '3px solid orange';
            inside[i].style.background = 'orange'; 
            radioGroup[i].style.background = 'gray';
});
 }
 


console.log(radio);
console.log(inside);