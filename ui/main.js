console.log('Loaded!');
var element=document.getElementById('image');
var x=0;
function moveRight()
{
        x=x+10;
        element.style.marginRight=x+'px';
}

element.onclick=function()
{
    var interval=setInterval(moveRight,50);
};
