console.log('Loaded!');
var element=document.getElementById('image');

element.onclick=function()
{
    var interval=setInterval(moveRight,50);
};
function moveRight()
{
        marginLeft=marginLeft+1;
        element.style.marginLeft=marginLeft+'px';
}