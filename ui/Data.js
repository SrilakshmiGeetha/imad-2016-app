
var y=document.getElementById("button1");
 
 y.onclick=function()
 {
     alert("processing");
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
    request.open('POST','http://srilakshmigeetha.imad.hasura-app.io/login' ,true);
    request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({"username": username, "password": password}));
     
};
/*
<div id="cf">
  <img class="bottom" src="http://i3.wallpaperscraft.com/image/vintage_pens_writing_paper_74945_1280x1024.jpg" />
  <img class="top" src="http://freedomwallpaper.com/wallpaper2/funky-wallpaper-hd.jpg" />
    </div>
    */