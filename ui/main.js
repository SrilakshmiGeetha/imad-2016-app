console.log('Loaded!');
var element=document.getElementById('image');
function moveRight()
{
        marginLeft=marginLeft+1;
        element.style.marginLeft=marginLeft+'px';
}
element.onclick=function()
{
    var interval=setInterval(moveRight,50);
};