var x=document.getElementById("heli");
x.style.marginLeft='1000px';
var margin=1000;
function moveRight()
{
    margin=margin-100;
    x.style.marginLeft=margin+ 'px';
}
x.onclick=function()
{
    var interval=setInterval(moveRight,100); 
};