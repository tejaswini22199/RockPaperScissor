let user=0;
let computer=0;
var userScore=document.getElementById("u");
var computerScore=document.getElementById("c");
var rock=document.getElementById("r");
var paper=document.getElementById("p");
var scissor=document.getElementById("s");
var result=document.getElementById("result");
var clear=document.getElementById("clear-btn");

function reset()
{
    user=0;
    computer=0;
    userScore.innerHTML=0;
    computerScore.innerHTML=0;
    result.innerHTML='Lets start a new game';
}
function win()
{
    user++;
    userScore.innerHTML=`${user}`;
    computerScore.innerHTML=`${computer}`;
    result.innerHTML='User won over Computer';
    result.classList.add('greenglow');
    setTimeout(() => {
        result.classList.remove('greenglow')
    }, 300);
}
function lose()
{
    computer++;
    userScore.innerHTML=`${user}`;
    computerScore.innerHTML=`${computer}`;
    result.innerHTML='User Lost';
    result.classList.add('redglow');
    setTimeout(() => {
        result.classList.remove('redglow')
    }, 300);
}
function draw()
{
    userScore.innerHTML=`${user}`;
    computerScore.innerHTML=`${computer}`;
    result.innerHTML='Draw';
    result.classList.add('greyglow');
    setTimeout(() => {
        result.classList.remove('greyglow')
    }, 300);
}
function getcomputerChoice()
{
    const s=["r","p","s"];
    const index=Math.floor(Math.random()*3);
    return s[index];
}
function Evaluate(userchoice)
{
    let compchoice=getcomputerChoice();
    if(userchoice===compchoice)
    {
        // console.log("userchoice",userchoice);
        // console.log("compchoice",compchoice);
        draw();
        //break;
    }
    else if(userchoice==="r" && compchoice==="s")
    {
        // console.log("userchoice",userchoice);
        // console.log("compchoice",compchoice);
        win();
       // break;
    }
    else if(userchoice==="p" && compchoice==="r")
    {
        // console.log("userchoice",userchoice);
        // console.log("compchoice",compchoice);
        win();
        //break;
    }
    else if(userchoice==="s" && compchoice==="p")
    {
        // console.log("userchoice",userchoice);
        // console.log("compchoice",compchoice);
        win();
       // break;
    }
    else
    {
        // console.log("userchoice",userchoice);
        // console.log("compchoice",compchoice);
        lose();
    }
}

function main()
{
    // rock.addEventListener('click',);
    // paper.addEventListener('click',);
    // scissor.addEventListener('click',);
     rock.addEventListener('click',function()
     {
        Evaluate("r");
     });
    paper.addEventListener('click',function()
    {
        Evaluate("p");
    });
    scissor.addEventListener('click',function()
    {
        Evaluate("s");
    });
    clear.addEventListener('click', function()
    {
        reset()
    });
   // rock.addEventListener('click',);
    // paper.addEventListener('click',console.log("pclicked"));
    // scissor.addEventListener('click',console.log("sclicked"));
}
main();