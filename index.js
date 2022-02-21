let screen1       = document.querySelector(".screen-1");
let screen2       = document.querySelector(".screen-2");

let reset         = document.querySelector(".function-AC");
let neg_pos       = document.querySelector(".negative-positive");
let percentage    = document.querySelector(".percentage");

let divide        = document.querySelector(".divide");
let multiply      = document.querySelector(".multiply");
let subtract      = document.querySelector(".subtract");
let plus          = document.querySelector(".plus");

let _0            = document.querySelector(".number-0");
let _1            = document.querySelector(".number-1");
let _2            = document.querySelector(".number-2");
let _3            = document.querySelector(".number-3");
let _4            = document.querySelector(".number-4");
let _5            = document.querySelector(".number-5");
let _6            = document.querySelector(".number-6");
let _7            = document.querySelector(".number-7");
let _8            = document.querySelector(".number-8");
let _9            = document.querySelector(".number-9");
let _dot          = document.querySelector(".number-dot");

let equal         = document.querySelector(".equal");


let num1        = 0;
let num2        = 0;
let numbers     = []; 
let decimal     = 0;
let result      = 0;
let operator    = "";
let operators   = [];
let count       = 0;
let total       = 0;


screen1.innerText = "";
screen2.innerText = "0";

function resetAll(){
    num1                = 0;
    num2                = 0;
    operators           = [];
    numbers             = [];
    count               = 0;
    decimal             = 0;
    result              = 0;
    screen1.innerText   = "";
    screen2.innerText   = 0 ;
    total               = 0;
    operator            = "";
};

reset.addEventListener("click", resetAll);

neg_pos.addEventListener("click", ()=>{
    if (screen2.innerText[0] !== "-"){
        screen2.innerText = "-" + screen2.innerText;
    }else{
        screen2.innerText = screen2.innerText.substr(1);
    }
})

percentage.addEventListener("click", ()=>{
    let num = +screen2.innerText;
    screen2.innerText = num / 100;
});


_0.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "0" : screen2.innerText + "0" ;});
_1.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "1" : screen2.innerText + "1" ;});
_2.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "2" : screen2.innerText + "2" ;});
_3.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "3" : screen2.innerText + "3" ;});
_4.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "4" : screen2.innerText + "4" ;});
_5.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "5" : screen2.innerText + "5" ;});
_6.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "6" : screen2.innerText + "6" ;});
_7.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "7" : screen2.innerText + "7" ;});
_8.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "8" : screen2.innerText + "8" ;});
_9.addEventListener("click", ()=>{screen2.innerText = (screen2.innerText == "0") ? screen2.innerText = "9" : screen2.innerText + "9" ;});

_dot.addEventListener("click", ()=>{
    if (decimal == 0) {
        screen2.innerText += "." ;
        decimal = 1;
    }   
});

divide.addEventListener("click", ()=>{
    if(operator !== "" && screen2.innerText == ""){}
    else {
        num1 = +screen2.innerText;
        numbers.push(num1);
        screen2.innerText = "";
        operator = "÷";
        operators.push("÷");
        screen1.innerText = (count == 1) ? num1 + operator : screen1.innerText + num1 + operator;
        count = 0;
    }
});

multiply.addEventListener("click", ()=>{
    if(operator !== "" && screen2.innerText == ""){}
    else {
        num1 = +screen2.innerText;
        numbers.push(num1)
        screen2.innerText = "";
        operator = "x";
        operators.push("x");
        screen1.innerText  = (count == 1) ? num1 + operator : screen1.innerText + num1 + operator;
        count = 0;
    }
});

subtract.addEventListener("click", ()=>{
    if(operator !== "" && screen2.innerText == ""){}
    else {
        num1 = +screen2.innerText;
        numbers.push(num1)
        screen2.innerText = "";
        operator = "-";
        operators.push("-");
        screen1.innerText  = (count == 1) ? num1 + operator : screen1.innerText + num1 + operator;
        count = 0;
    }
});

plus.addEventListener("click", ()=>{
    if(operator !== "" && screen2.innerText == ""){}
    else {
        num1 = +screen2.innerText;
        numbers.push(num1);
        screen2.innerText = " ";
        operator = "+";
        operators.push("+");
        screen1.innerText  = (count == 1) ? num1 + operator : screen1.innerText + num1 + operator;
        count = 0;
    }
});

equal.addEventListener("click", ()=>{
    if (count == 0){
        num2 = +screen2.innerText;
        numbers.push(num2)
        // console.log(numbers, operators, totalResult());
        screen1.innerText = (screen1.innerText == "0") ? num2 : screen1.innerText + num2;
        num1 = totalResult();
        numbers = [];
        operators    = [];
        operator = "";
        screen2.innerText = num1;
    }
    count = 1;
});

function totalResult(){
    total = numbers[0];
    for (let i = 0; i < numbers.length-1; i++) {
        switch (operators[i]) {
            case "+":
                total += numbers[i+1];
                break;
            case "-":
                total -= numbers[i+1];
                break;
            case "x":
                total *= numbers[i+1];
                break;
            case "÷":
                numbers[i] == 0 ? total = "∞" : total /= numbers[i+1] ;
                break;       
            default:
                resetAll();
                break;
        }
    }
    console.log(total);
    return +(Math.round(total + "e+4") + "e-4");
}


