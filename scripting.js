var x=document.getElementById("heli");
x.style.marginLeft='1000px';
var y=document.getElementById("packet");
y.style.marginLeft='1000px';
y.style.marginTop='0px';
var marginheli=1000;
var marginpack=998;
var z=0;
var Top=0;
function moveRight()
{
    marginheli=marginheli-20;
    x.style.marginLeft=marginheli+ 'px';
     if((z===1)&&(Top<=1000))
    {
        Top=Top+ 20;
        y.style.width="50";
        y.style.height="50";
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