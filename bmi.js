let weight = document.getElementById('weight');
let height = document.getElementById('height');
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let weightValue = weight.value;
  let heightValue = height.value;
  let bmi = Math.round(weightValue/Math.pow(heightValue, 2));
  let par = document.querySelector('p');
  if(bmi < 18.5){
    par.innerHTML = `You're BMI is ${bmi} which means you are underweight`;
  } else if(bmi >= 18.5 && bmi <= 24.9){
    par.innerHTML = `You're BMI is ${bmi} which means you have a normal weight`;
  } else if(bmi >= 25 && bmi <= 29.9){
    par.innerHTML = `You're BMI is ${bmi} which means you are overweight`;
  } else if(bmi >= 30) {
    par.innerHTML = `You're BMI is ${bmi} which means you are obese`;
  } else{
    par.innerHTML = "Please enter a number"
  }
  weight.value = null;
  height.value = null
});