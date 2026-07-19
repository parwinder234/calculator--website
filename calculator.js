var result=document.getElementById('inputbox');


function pick(val){
    result.value+=val;

}
function solve()
{
let x=result.value;
let y=eval(x);
result.value=y;
}
function clr(){
result.value="";

}
function backspace(){
result.value=result.value.slice(0,-1);

}
