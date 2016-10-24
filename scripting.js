var x=document.getElementById("heli");
x.style.marginLeft='1000px';
var y=document.getElementById("packet");
y.style.marginLeft='1000px';
var b1=document.getElementById("build1");
b1.style.marginTop='500px';
b1.style.marginLeft='250px';
var b2=document.getElementById("build2");
b2.style.marginTop='10px';
b2.style.marginLeft='500px';
var b3=document.getElementById("build3");
b3.style.marginTop='20px';
b3.style.marginLeft='750px';
y.style.marginTop='0px';
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