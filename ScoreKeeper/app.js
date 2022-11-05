const p1Button =document.querySelector('#p1Button');
const p2Button=document.querySelector('#p2Button');
const p1Display=document.querySelector('#p1Display');
const p2Display=document.querySelector('#p2Display');
const reset =document.querySelector('#reset');
const playto=document.querySelector('#playto')

let p1Score=0;
let p2Score=0;
let winingScore=5;
let IsGameOver=false;

p1Button.addEventListener('click',() => {
    if(!IsGameOver){
    if(winingScore!==p1Score)
    {
    p1Score+=1;
    p1Display.textContent=p1Score;
    }
    else
    {
        IsGameOver=true;
        p1Display.classList.add('has-text-sucess');
        p2Display.classList.add('has-text-danger');
        p1Button.disabled=true;
        p2Button.disabled=true;
    }
}
})

p2Button.addEventListener('click',() => {
    if(!IsGameOver){
    if(winingScore!==p2Score)
    {
    p2Score+=1;
    p2Display.textContent=p2Score;
    }
    else
    {
        IsGameOver=true;
        p2Display.classList.add('has-text-sucess');
        p1Display.classList.add('has-text-danger')
        p1Button.disabled=true;
        p2Button.disabled=true;
    }
}
})

playto.addEventListener('change',function()
{
    winingScore=parseInt(this.value);
    Reset();
}
)

reset.addEventListener('click',Reset);

function Reset(){
    IsGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    p1Display.classList.remove('has-text-succes','has-text-danger');
    p2Display.classList.remove('has-text-sucess','has-text-danger');
    p1Button.disabled=false;
    p2Button.disabled=false;
}