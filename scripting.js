var x=document.getElementById("heli");
x.style.marginLeft='1000px';
var y=document.getElementById("packet");
y.style.marginLeft='1000px';
var pic=document.getElementById("flood");
pic.style.marginTop='300px';
var marginheli=1000;
var marginpack=998;
var z=0;
var Top=0;
var Bottom=320;
var a=[];
var i=0;
function moveRight()
{
    marginheli=marginheli-20;
    x.style.marginLeft=marginheli+ 'px';
    if(z===0)
    {
        y.style.marginLeft=marginheli+ 'px';   
    }
    
   else if((z>=1)&&(Top<=500))
    {
        
        Top=Top+ 20;
        Bottom=Bottom-20;
        pic.style.marginTop=Bottom+ 'px';
        y.style.width='50px';
        y.style.height='50px';
       
       
    }
    document.addEventListener("keydown", function(event)
    {
        console.log(event.which);
        if(event.which==13)
        {
            y.style.marginLeft=marginheli+ 'px'; 
            z++;
            
        }
    });
}
x.onclick=function()
{
    var interval=setInterval(moveRight,100); 
};