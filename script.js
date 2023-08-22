const inputElement = document.querySelector("input");
const showElement = document.querySelector(".js-guess-result");
const enterElement = document.getElementById("enter");
const buttons = document.querySelectorAll("button");
const levels = document.querySelector("#js-level");

const level1 = document.querySelector("#level1");
const level2 = document.querySelector("#level2");
const level3 = document.querySelector("#level3");

let attempts = 0;
let level = 1;

function randomNumber100()
{
    return Math.floor(Math.random()*100);
}


function randomNumber500()
{
    return Math.floor(Math.random()*500);
}

function randomNumber1000()
{
    return Math.floor(Math.random()*1000);
}


let randoms = randomNumber100();

console.log(randoms);

inputElement.addEventListener("keyup",(event)=>{
    if(event.key === "Enter")
    {
        attempts++;
        numberCheck();
    }
})

function buttonClick()
{ 
    buttons.forEach(element=>{
        element.addEventListener("click",()=>{
            if (element.innerText === "Clear")
            {
                inputElement.value = "";
            }
            else if(element.innerText === "Level 1")
            {
                level = 1;
                level1.style.backgroundColor = "lightgreen";
                level2.style.backgroundColor = "white";
                level3.style.backgroundColor = "white";
                levels.innerText = "LEVEL 1";
                randoms = randomNumber100();
                console.log(randoms);
            }
            else if(element.innerText === "Level 2")
            {

                level = 2;
                level1.style.backgroundColor = "white";
                level2.style.backgroundColor = "lightgreen";
                level3.style.backgroundColor = "white";
                levels.innerText = "LEVEL 2";
                randoms = randomNumber500();
                console.log(randoms);
            }
            else if(element.innerText === "Level 3")
            {
                level = 3;
                level1.style.backgroundColor = "white";
                level2.style.backgroundColor = "white";
                level3.style.backgroundColor = "lightgreen";
                levels.innerText = "LEVEL 3";
                randoms = randomNumber1000();
                console.log(randoms);
            }
            else if(element.innerText === "Enter")
            {
                if(inputElement.value === "")
                    showElement.innerText = "Enter a number";
                else
                {
                    attempts++;
                    numberCheck();   
                }
            }
            else
            { 
                inputElement.value = inputElement.value + element.innerText;
            }
        });
    });

}
function numberCheck()
{
    guessed = Number(inputElement.value);

    if(guessed>randoms)
    {
        showElement.innerText = "Try Again! Your number is Bigger";
    }
    else if(guessed<randoms)
    {
        showElement.innerText = "Try Again! Your number is smaller";
    }
    else
    {
        showElement.innerText = `Congrats! You guessed ${randoms} in ${attempts} attempts`;

        if(level === 1)
            randoms = randomNumber100();
        else if(level === 2)
            randoms = randomNumber500();
        else 
            randoms = randomNumber1000();

        console.log(randoms);
        attempts=0;
    }
}

buttonClick();
