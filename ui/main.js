
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
        
        if(request.readyState === XMLHttpRequest.DONE)
        {
                if(request.status===200)
                {
                        var counter=request.responseText;
                        var span=document.getElementById('count');
                        span.innerHTML=counter.toString();
                        console.log(counter.toString());
                }
        }
    };
    request.open('GET','http://srilakshmigeetha.imad.hasura-app.io/counter',true);
    request.send(null);
};

 var x=document.getElementById("button");

 x.onclick=function()
 {
     var names=['name1','name2','name3','name4'];
     var list='';
     for(var i=0;i<names.length;i++)
     {
        list+='<li>'+names[i]+'</li>';
     }
     var y=document.getElementById("list");
    y.innerHTML=list;
};
