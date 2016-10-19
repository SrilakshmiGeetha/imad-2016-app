
/*var counter=0;
var button=document.getElementById("yes");

button.onclick= function()
{
    counter=counter+1;
    alert("Hello");
    console.log("SHIT");
    var span=documemnt.getElementById("times");
    span.innerHTML=counter.toString();
};
        var counter=0;
            var beaut=document.getElementById('counter');
            beaut.onclick= function()
            {
                counter=counter+1;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
                
            }; */

var button=document.getElementById('counter');
button.onclick = function()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.Done)
        {
                if(request.status==200)
                {
                        var counter=request.responseText;
                        var span=document.getElementById('count');
                        span.innerHTML=counter.toString();
                }
        }
    };
    request.open('GET','http://srilakshmigeetha.imad.hasura-app.io/counter',true);
    request.send(null);
};

