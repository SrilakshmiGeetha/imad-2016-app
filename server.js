var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto=require('crypto');
var bodyParser= require('body-parser');
var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var Pool = require('pg').Pool;
var config=
{
    user: 'srilakshmigeetha',
    database: 'srilakshmigeetha',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};
var pool=new Pool(config);

var articles=
{
articleOne:{
    date:'October 7 2016',
    heading: 'Article One',
    title:'Article one',
    content:`<p>
                I just heard you found the one you've been looking for
            </p>
            <p>
                Wish I knew that it wasn't me
            </p>
            <p>
                Even after all this time I still wonder
            </p>
            <p>
                Why we can't move on, just the way you did so easily
            </p>
            `
},
articleTwo:{
    date:'October 8 2016',
    title:'Article two',
    heading:'Article Two',
    content:` 
            <p>
                Don't want to know
            </p>
            <p>
                The kind of dress you're wearing tonight
            </p>
            <p>
                If he's holding onto you so tight
            </p>
            <p>
                The way I did before
            </p> `
},
articleThree:{
    date:'October 9 2016',
    title:'Article three',
    heading:'Article Three',
    content:`<p>
                I overdosed
            </p>
            <p>
                Should've known your love was a game
            </p>
            <p>
                Can't get it out of my brain
            </p>
            <p>
                Oh, it's just the same
            </p> `
}
};
var articleOne=
{
    date:'October 7 2016',
    heading: 'Article One',
    title:'Article one',
    content:`<p>
                I just heard you found the one you've been looking for
            </p>
            <p>
                Wish I knew that it wasn't me
            </p>
            <p>
                Even after all this time I still wonder
            </p>
            <p>
                Why we can't move on, just the way you did so easily
            </p>
            `
}; 

function createpage(data)
{
    var date=data.date;
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=
    `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <a href="/">Let's go back?</a>
            <hr>
            <div>
                <h2>
                    ${heading}
                </h2>
            </div>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
    </html>
    `
    return htmltemplate;    
}
function hash(input,salt)
{
    var hashed=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return ["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
}


app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'ui','index.html'));
});
app.get('/ui/Data.js',function(req,res){

    res.sendFile(path.join(__dirname, 'ui', 'Data.js'));
});
app.post('/create-user',function(req,res)
{
   var username=req.body.username;
   var password=req.body.password;
   var email=req.body.email;
   var salt=crypto.randomBytes(128).toString('hex');
   var dbString=hash(password,salt);
   pool.query('INSERT INTO "user" (username,password,email) VALUES ($1,$2,$3)', [username,dbString,email],function(err,result)
   {console.log("hello");
        if(err)
        {
            res.status(500).send(err.toString());
        }
      
        
        else
        {
            res.status(200).send("Succesfully created"+ username);
        }
   });
});
app.post('/add-article',function(req,res)
{
   var title=req.body.title;
   var articles=req.body.article;
   pool.query('INSERT INTO "articles" (title,article) VALUES ($1,$2)', [title,article],function(err,result)
   {console.log("hello");
        if(err)
        {
            res.status(500).send(err.toString());
        }
      
        
        else
        {
            res.status(200).send("Succesfully inserted");
        }
   });
});

app.post('/login',function(req,res)
{
   var username=req.body.username;
   var password=req.body.password;
   
   pool.query('SELECT * FROM "user" WHERE username = ($1)', [username],function(err,result)
   {console.log("hello");
        if(err)
        {
            res.status(500).send(err.toString());
        }
        
        else
        {
            var salt=crypto.randomBytes(128).toString('hex');
            var hashedpassword=hash(password,salt);
            var dbString=result.rows[0].password;
            if(dbString===hashedpassword)
            {
                alert("credentials correct");
                res.status(200).send("logged in");
            }
            else
            {
                alert("incorrect credentials");
                 res.status(404).send("not logged in");
            }
            
        }
   });
});

app.get('/ui/favicon.ico',function(req,res)
{
    res.sendFile(path.join(__dirname,'ui','favicon.ico'));
});
 app.get('/ui/add.html', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'add.html'));
});
 app.get('/ui/Setting.css', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'Setting.css'));
 });

app.get('/ui/Layout.html',function(req,res){

    res.sendFile(path.join(__dirname, 'ui', 'Layout.html'));
});
app.get('/ui/homepage',function(req,res){

    res.sendFile(path.join(__dirname, 'ui', 'homepage.html'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
    res.send(counter.toString());
  
});
var count=0;
app.get('/:articleName', function (req, res) {
    count=count+1;
    var articleName=req.params.articleName;
  //  res.send(count.toString());
    res.send(createpage(articles[articleName]));
  
});
app.get('/submit-name/:name',function(req,res)
{
    var name=req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
    
});
app.get('/get-articles', function (req, res)
{
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT MAX(count) FROM articles ",function (err, result)
  {
        if (err) 
        {
         res.status(500).send(err.toString());
         } 
         else
         {
            console.log("WORKING2");
            var id=result[0].rows.count;
            pool.query("SELECT * FROM articles where count=$1 ",[id],function (err, result)
            { 
            if(err) 
             {
                  res.status(500).send(err.toString());
             } 
            else 
            {
                  if (result.rows.length === 0)
                  {
                        res.status(404).send('Article not found');
                   }
                 else 
                 {
             
                    console.log("WORKING3");
                     var articleData = result.rows[0];
                    res.send(JSON.stringify(result.rows));
                 }
             }
            });
        }
  });
});

app.get('/ui/main.js',function(req,res)
{

    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
 });



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
