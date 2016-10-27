var x=document.getElementById("heli");
x.style.marginLeft='0px';
var y=document.getElementById("packet");
y.style.marginLeft='1000px';
y.style.marginTop='0px';
var pic=document.getElementById("marquee-container");
pic.style.marginTop='260px';

var marginheli=0;
var marginpack=998;
var z=0;
var Top=0;
var Bottom=320;
var floodmargin1=0;
var floodmargin2=1000;
function moveRight()
{
    if(marginheli>=1200)
    marginheli=0;
    marginheli=marginheli+20;
    floodmargin1=floodmargin1-10;
     pic.style.marginLeft=floodmargin1+ 'px';
    x.style.marginLeft=marginheli+ 'px';
 
    if(z===0)
    {
        y.style.marginLeft=marginheli+ 'px';   
    }
    
   else if((z>=1)&&(Top<=500))
    {
        
        Top=Top+ 10;
        Bottom=Bottom-10;
        y.style.marginTop=Top+ 'px';
        pic.style.marginTop=Bottom+ 'px';
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