var counter=0;
var button=document.getElementById('Press');
button.onclick= function()
{
    counter=counter+1;
    var span=documemnt.getElementById('times');
    span.innerHTML=counter.toString();
};
