 var x=document.getElementById("submitbutton");
 x.onclick=function()
 {
   var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        
        if(request.readyState === XMLHttpRequest.DONE)
        {
            
            if(request.status===200)
            {
                alert("your content is updated");
            }
            else if(request.status===500)
            {
                alert("something went wrong");
            }
        }
    };
    var title=document.getElementById('title').value;
    var password=document.getElementById('article').value;
    console.log(title);
    request.open('POST','http://srilakshmigeetha.imad.hasura-app.io/create-content' ,true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({title: title, article:article}));
};
