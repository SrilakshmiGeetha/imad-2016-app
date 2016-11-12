var x=document.getElementById("submitbutton");
 

/*
console.log("hey");
var request = new XMLHttpRequest();

request.onreadystatechange = function () 
{
    if (request.readyState === XMLHttpRequest.DONE) {
    var articles = document.getElementById('articles');
    var title = document.getElementById('title');
    if (request.status === 200) 
    {
       console.log("WORKING");
         var articleData = JSON.parse(this.responseText);
        articles.innerHTML = article.Data[0].description;
        
        title.innerHTML = article.Data[0].title;
        } else
        {
            CONSOLE.LOG("NOT WORKING");
            articles.innerHTML('Oops! Could not load all articles!');
        }
        request.open('GET', '/get-articles', true);
        request.send(null);
    }
}*/
var y=document.getElementById("button1");

if(x != NULL){
 x.onclick = function()
 {
   var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        
        if(request.readyState === XMLHttpRequest.DONE)
        {
            
            if(request.status===200)
            {
                alert("your article is created");
            }
            else if(request.status===500)
            {
                alert("something went wrong");
            }
        }
    };
    var title=document.getElementById('title').value;
    var article=document.getElementById('article').value;
    request.open('POST','http://srilakshmigeetha.imad.hasura-app.io/add-article' ,true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({title:title, article:article}));
     
};
}
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
   