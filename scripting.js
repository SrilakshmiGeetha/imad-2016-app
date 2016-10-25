var x=document.getElementById("heli");
x.style.marginLeft='1000px';
var y=document.getElementById("packet");
y.style.marginLeft='1000px';
var pic1=document.getElementById("flood1");
pic1.style.marginTop='300px';
var pic2=document.getElementById("flood2");
pic2.style.marginTop='300px';

var marginheli=1000;
var marginpack=998;
var z=0;
var Top=0;
var Bottom=320;
var floodmargin1=0;
var floodmargin2=1000;
function moveRight()
{
    if(marginheli<=2)
    marginheli=1000;
    marginheli=marginheli-20;
    floodmargin1=floodmargin1+5;
    floodmargin2=floodmargin1-5;
    pic1.style.marginLeft=floodmargin1+ 'px';
    pic2.style.marginRight=floodmargin2+ 'px';
    x.style.marginLeft=marginheli+ 'px';
    if(z===0)
    {
        y.style.marginLeft=marginheli+ 'px';   
    }
    
   else if((z>=1)&&(Top<=500))
    {
        
        Top=Top+ 20;
        Bottom=Bottom-20;
        y.style.marginTop=Top+ 'px';
        pic1.style.marginTop=Bottom+ 'px';
        y.style.width='50px';
        y.style.height='50px';
       
       
    }
    document.addEventListener("keydown", function(event)
    {
        console.log(event.which);
        if(event.which==13)
        {
            if(Top>500)
            {
                y.style.marginLeft=marginheli+ 'px'; 
                Top=0;
                Bottom=320;
            }
            z++;
            
        }
    });
}
x.onclick=function()
{
    var interval=setInterval(moveRight,100); 
};