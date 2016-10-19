var counter=0;
var x=document.getElementById('Press');
x.onclick= function()
{
    counter=counter+1;
    var span=documemnt.getElementById('times');
    span.innerHTML=counter.toString();
};
