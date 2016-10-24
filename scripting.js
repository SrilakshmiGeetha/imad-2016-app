var x=document.getElementById("heli");
x.style.marginLeft='1000px';
var y=document.getElementById("packet");
y.style.marginLeft='1000px';
var b1=document.getElementsByClassName("building");
b1.style.marginTop='250px';
var marginheli=1000;
var marginpack=998;
var z=0;
var Top=0;

function moveRight()
{
    marginheli=marginheli-20;
    x.style.marginLeft=marginheli+ 'px';
    if(z===0)
    {
        y.style.marginLeft=marginheli+ 'px';   
    }
    else if((z===1)&&(Top<=500))
    {
        Top=Top+ 20;
        y.style.width='50px';
        y.style.height='50px';
        y.style.marginTop=Top+'px';
       
    }
    document.addEventListener("keydown", function(event)
    {
        console.log(event.which);
        if(event.which==13)
        {
            z=1;
            
        }
    });
}
x.onclick=function()
{
    var interval=setInterval(moveRight,100); 
};