// This function will run when the DOM is loaded and after 1 second.
window.addEventListener("DOMContentLoaded", () => {
  // accessing all of the shapes on the page.
  const container = document.querySelectorAll(".shape");
  // This function will toggle the "active" class on all of the shapes.
  const addingAutoClass = () => 
    container.forEach((shape) => shape.classList.toggle("active"));
  // This function will call the addingAutoClass function after 1 second.
  setTimeout(addingAutoClass, 1000);
});


// accessing the input display
const inptDisplay = document.querySelector(".displays_two");
const numBtn = document.querySelectorAll(".num");

numBtn.forEach( btns => {
  btns.addEventListener("click",(btn)=>{
      inptDisplay.innerText += btn.target.innerText
  });
});


// clear btn funcionlity 
const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click",()=>{
   const isEmpty = inptDisplay.innerText === "";
   !isEmpty ? inptDisplay.innerText = "" : alert("something went wrong..");
})


// deleting btn functinality
const delBtn = document.querySelector("#delete");
delBtn.addEventListener('click',()=>{
  const inptD_value = inptDisplay.innerText.split("");
  inptD_value.pop();
  inptDisplay.innerText = inptD_value.join("");
});


// Get all of the sign buttons.
const signBtns = document.querySelectorAll(".sign");

// This function will be called when a sign button is clicked.
signBtns.forEach((btn, indx) => {
  btn.addEventListener("click", () => {
    // Get the current value of the input display.
    let inptDisplayVal = inptDisplay.innerText;
    // Get the array of possible signs.
    const signVal = ["/", "*", "-", "+", "."];
    // Get the current sign.
    const inptVal = signVal[indx];
    // Create a regular expression to match the last character of the input display.
    const regx = /[+-/*.]$/;
    // Check if the last character of the input display is a valid sign.
    const isLastMatch = regx.test(inptDisplayVal);
    // Check if the input display is empty.
    const isEmpty = !(inptDisplayVal === "");
    // If the last character of the input display is a valid sign, replace it with the current sign.
    if (isLastMatch) 
      inptDisplay.innerText =  inptDisplayVal.replace(regx, inptVal);
    // If the input display is empty, add the current sign to the input display.
    else if (isEmpty) 
      inptDisplay.innerText = inptDisplayVal += inptVal;
  });
});

const perBtn = document.querySelector(".percentCalc");

perBtn.addEventListener('click', ()=>{
  inptDisplay.innerText = eval(inptDisplay.innerText)/100;
});

const equalBtn = document.querySelector(".equal");
const btnAll = document.querySelectorAll('button:not(#clear)');
const previewDisp = document.querySelector('.displays_one');


equalBtn.addEventListener('click', ()=>{
  inptDisplay.innerText = eval(inptDisplay.innerText);
  previewDisp.innerText = ' '
});


btnAll.forEach( btn =>{
  btn.addEventListener('click', ()=>{
    previewDisp.innerText = eval(inptDisplay.innerText)
  })
})









