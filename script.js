const inputElement = document.querySelector("input");
const showElement = document.querySelector(".js-guess-result");
const enterElement = document.getElementById("enter");
const buttons = document.querySelectorAll("button");
const levels = document.querySelector("#js-level");
const showAttempts = document.querySelector("#js-attempts");
const level1 = document.querySelector("#level1");
const level2 = document.querySelector("#level2");
const level3 = document.querySelector("#level3");
const reset = document.querySelector("#js-reset");

let maxAttempts = 10;
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
console.log(maxAttempts);

inputElement.addEventListener("keyup",(event)=>{
    if(event.key === "Enter")
    {
        attempts++;
        numberCheck();
    }
})

reset.addEventListener("click",()=>{

    showElement.innerText = "Enter a number";
    if(level === 1)
    {
        maxAttempts = 10;
        randoms = randomNumber100();
    }
    else if(level === 2)
    {
        maxAttempts = 13;
        randoms = randomNumber500();
    }
    else 
    {
        maxAttempts = 16;
        randoms = randomNumber1000();
    }
    console.log(randoms);
    console.log(maxAttempts);
    showAttempts.innerText = `Life ${maxAttempts}`;
    inputElement.value = "";
    attempts=0;
});

function buttonClick()
{ 
    buttons.forEach(element=>{
        element.addEventListener("click",()=>{
            if(maxAttempts>0)
            {
                if (element.innerText === "Clear")
                {
                    inputElement.value = "";
                }
                else if(element.innerText === "Level 1")
                {
                    level = 1;
                    attempts=0;
                    maxAttempts = 10;
                    level1.style.backgroundColor = "lightgreen";
                    level2.style.backgroundColor = "white";
                    level3.style.backgroundColor = "white";
                    levels.innerText = "LEVEL 1";
                    randoms = randomNumber100();
                    showAttempts.innerText = `Life ${maxAttempts}`;
                    console.log(randoms);
                    console.log(maxAttempts);
                }
                else if(element.innerText === "Level 2")
                {
    
                    level = 2;
                    attempts=0;
                    maxAttempts = 13;
                    level1.style.backgroundColor = "white";
                    level2.style.backgroundColor = "lightgreen";
                    level3.style.backgroundColor = "white";
                    levels.innerText = "LEVEL 2";
                    randoms = randomNumber500();
                    showAttempts.innerText = `Life ${maxAttempts}`;
                    console.log(randoms);
                    console.log(maxAttempts);
                }
                else if(element.innerText === "Level 3")
                {
                    level = 3;
                    attempts=0;
                    maxAttempts = 16;
                    level1.style.backgroundColor = "white";
                    level2.style.backgroundColor = "white";
                    level3.style.backgroundColor = "lightgreen";
                    levels.innerText = "LEVEL 3";
                    randoms = randomNumber1000();
                    showAttempts.innerText = `Life ${maxAttempts}`;
                    console.log(randoms);
                    console.log(maxAttempts);
                }
                else if(element.innerText === "Enter")
                {
                    if(inputElement.value === "")
                        showElement.innerText = "Enter a number";
                    else
                    {
                        attempts++;
                        numberCheck();   
                        maxAttempts--;
                        showAttempts.innerText = `Life ${maxAttempts}`;
                    }
                }
                else if(element.innerText !== "Play Again")
                { 
                    inputElement.value = inputElement.value + element.innerText;
                }
            }
            else
            {
                showElement.innerText = "You Loss the Game!";
                
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
            showElement.innerText = `Congrats! You guessed ${randoms} in ${attempts} tries`;
            if(level === 1)
            {
                maxAttempts = 10;
                randoms = randomNumber100();
            }
            else if(level === 2)
            {
                maxAttempts = 13;
                randoms = randomNumber500();
            }
            else 
            {
                maxAttempts = 16;
                randoms = randomNumber1000();
            }

            console.log(randoms);
            console.log(maxAttempts);
            attempts=0;
        }
}

buttonClick();
