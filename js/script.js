// ------------------------------ Task-3

function makingCombo(intArr){
  let res = [];
  for(let i =0; i<intArr.length; i++){
    for(let j=0; j<intArr.length; j++){
      for(let k = 0; k<intArr.length; k++){
        if(intArr[i] !=0 && i!=j && i!=k && k!=j){
          if(!res.includes(+(""+intArr[i] + intArr[j] + intArr[k]))){
            res.push(+(""+intArr[i] + intArr[j] + intArr[k]));
          }
        }
      }
    }
  }
alert (`Here are all possible unique integer combinations from digits of inputed number. Variants with leading zeros are excluded:
${res.sort((a,b)=>a-b)}`);
}
function convertDigits(inputDigitsElement){
  let inpInt = inputDigitsElement;
  let toNum = num => Number(num);
  let intArr = Array.from(String(inpInt), toNum);
  makingCombo(intArr);
} 
function handleSubmitDigitsCombo(event){
  event.preventDefault();
  let inputDigits = document.querySelector("#task-digits");
  let inputDigitsElement= (inputDigits.value);
  convertDigits(inputDigitsElement);
}

// ------------------------------ Task-2

function checkMultiply(inputMultiplyElement){
  if (inputMultiplyElement == "") {
    alert(`Get sure you entered a number`);
  }
  else if ((inputMultiplyElement % 3) === 0){
    alert(`${inputMultiplyElement} is a multiply of number 3.`);
  } 
  else {
    let newMultiplyElement = inputMultiplyElement % 3;
    alert(`${inputMultiplyElement} is not a multiply of number 3. The rest is ${newMultiplyElement}.`);
  }
}
function handleSubmitMultiply(event){
  event.preventDefault();
  let inputMultiply = document.querySelector("#task-multiply");
  let inputMultiplyElement= (inputMultiply.value);
  checkMultiply(inputMultiplyElement);
}

// ------------------------------ Task-1

function checkOddness(inputOddElement){
  if (inputOddElement == "") {
    alert(`Get sure you entered a number`);
  }
  else if ((inputOddElement === 0 || (inputOddElement % 2) === 0)){
    alert(`${inputOddElement} is not an odd number. It is an EVEN number`);
  } 
  else {
    alert(`${inputOddElement} is an ODD number`);
  }
}
function handleSubmitOdd(event){
  event.preventDefault();
  let inputOdd = document.querySelector("#task-odd");
  let inputOddElement= (inputOdd.value);
  checkOddness(inputOddElement);
}

// ------------------------------Main

let oddCheck = document.querySelector("#odd-check-btn");
oddCheck.addEventListener("click", handleSubmitOdd);

let multiplyCheck = document.querySelector("#multiply-check-btn");
multiplyCheck.addEventListener("click", handleSubmitMultiply);

let digitsCheck = document.querySelector("#digits-combo-btn");
digitsCheck.addEventListener("click", handleSubmitDigitsCombo);