
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
   var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        
        if(request.readyState === XMLHttpRequest.DONE)
        {
            
            if(request.status===200)
            {
                var names=request.responseText;
                names=JSON.parse();
                var list='';
                for(var i=0;i<names.length;i++)
                {
                    list+='<li>'+names[i]+'</li>';
                 }
                var y=document.getElementById("list");
                y.innerHTML=list;
            }
        }
    };
    var nameInput=document.getElementById('name');
    var namee=nameInput.value;
    request.open('GET','http://srilakshmigeetha.imad.hasura-app.io/sumbit-name?name=' + namee ,true);
    request.send(null);
     
};
