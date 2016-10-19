/*var counter=0;
var button=document.getElementById("yes");

button.onclick= function()
{
    counter=counter+1;
    alert("Hello");
    console.log("SHIT");
    var span=documemnt.getElementById("times");
    span.innerHTML=counter.toString();
};*/
 /*counter=0;
            var beaut=document.getElementById("yes");
            beaut.onclick= function()
            {
                counter=counter+1;
                var span=document.getElementById("times");
                span.innerHTML=counter.toString();
                
            }; */
var button=document.getElementById('counter');
window.onload=function()
{

button.onclick = function()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readystate===XMLHttpRequest.Done)
        {
                if(request.status==200)
                {
                        var counter=request.responseText;
                        var span=document.getElementById('times');
                        span.innerHTML=counter.toString();
                }
        }
    };
    request.open('GET','http://srilakshmigeetha.imad.hasura-app.io/counter',true);
    request.send(null);
};
};

