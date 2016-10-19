console.log('Loaded!');
var element=document.getElementById('image');
var x=0;
function moveRight()
{
        x=x+1;
        element.style.marginLeft=x+'px';
}

element.onclick=function()
{
    var interval=setInterval(moveRight,50);
};
