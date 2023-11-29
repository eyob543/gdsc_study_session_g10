let par = document.querySelector('p');
par.innerHTML = 0;
//for increase
let inc = document.getElementById('increase');
inc.addEventListener('click', () => {
  par.innerHTML++
  if (par.innerHTML > 0){
    par.style.color = 'green';
  } else if(par.innerHTML == 0){
    document.getElementById('number').style.color = "black"
  }
})
//for decrease
let dec = document.getElementById('decrease');
dec.addEventListener('click', () => {
  par.innerHTML--
  if(par.innerHTML < 0){
    document.getElementById('number').style.color = "red"
  } else if(par.innerHTML == 0){
    document.getElementById('number').style.color = "black"
  }
})
//for reset
let res = document.getElementById('reset');
res.addEventListener('click', () => {
  par.innerHTML = 0;
  document.getElementById('number').style.color = "black"
})
/*
THIS CODE DOES NOT UPDATE THE COLOR BECAUSE IT IS NOT CONSTANTLY CHECKING WHETHER OR NOT IF PAR.INNERHTML IS > 0 WHEN THE BUTTON GETS CLICKED  

let par = document.querySelector('p');
par.innerHTML = 0;
//for increase
let inc = document.getElementById('increase');
inc.addEventListener('click', () => {
  par.innerHTML++
})
//for decrease
let dec = document.getElementById('decrease');
dec.addEventListener('click', () => {
  par.innerHTML--
})
//for reset
let res = document.getElementById('reset');
res.addEventListener('click', () => {
  par.innerHTML = 0;
})
if(par.innerHTML > 0){
  document.getElementById('number').style.color = "green";
}else if(par.innerHTML < 0){
  document.getElementById('number').style.color = "red"
}else{
  document.getElementById('number').style.color = "yellow"
}
*/
