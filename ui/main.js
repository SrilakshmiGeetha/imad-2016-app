
/*var button=document.getElementById('counter');
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
                names=JSON.parse(names);
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
    request.open('GET','http://srilakshmigeetha.imad.hasura-app.io/submit-name?name=' + namee ,true);
    request.send(null);
     
};

};*//*



*/
function dummy(){
 var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        
        if(request.readyState === XMLHttpRequest.DONE)
        {
            
            if(request.status===200)
            {
                
                alert("Logging in");
            }
            else if(request.status===500)
            {
                alert("something went wrong :(");
            }
        }
    };
    var username=document.getElementById('username1').value;
    var password=document.getElementById('password1').value;
    console.log(username);
    request.open('POST','http://srilakshmigeetha.imad.hasura-app.io/loginPage' ,true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({"username": username, "password": password}));
    console.log("LOGGING IN");
}
/*
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
                alert("your account is created");
            }
             else if(request.status === 403)
              alert("INCORRECT");
            else if(request.status===500)
            {
                alert("something went wrong");
            }
        }
    };
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var email=document.getElementById('email').value;
    console.log(username);
    request.open('POST','http://srilakshmigeetha.imad.hasura-app.io/create-user' ,true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password, email: email}));
     
};
*/