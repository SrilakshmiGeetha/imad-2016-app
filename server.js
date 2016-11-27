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
/*
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
});*/
app.post('/create-content', function (req, res) 
{
   var title = req.body.title;
   var article = req.body.article;
   
   pool.query('INSERT INTO "articles" (title,article) VALUES ($1,$2)', [title,article], function (err, result) 
   {
       console.log("HETYYTYY");
      if (err) 
      {
          res.status(500).send(err.toString());
      } 
      else
      {
          alert("INSERTED");    
      }
   });
});
app.post('/loginPage', function (req, res) {
   var username = req.body.username;
   var password = req.body.password;
   
   pool.query('SELECT * FROM "user" WHERE username = $1', [username], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0) {
              res.status(403).send('username/password is invalid');
          } else {
              // Match the password
              var dbString = result.rows[0].password;
              var salt = dbString.split('$')[2];
              var hashedPassword = hash(password, salt); // Creating a hash based on the password submitted and the original salt
              if (hashedPassword === dbString) {
                
                // Set the session
                // set cookie with a session id
                // internally, on the server side, it maps the session id to an object
                // { auth: {userId }}
                
                res.send('credentials correct!');
                
              } else {
                res.status(403).send('username/password is invalid');
              }
          }
      }
});
        
   
        //res.send("working");
   
});

app.get('/ui/favicon.ico',function(req,res)
{
    res.sendFile(path.join(__dirname,'ui','favicon.ico'));
});
app.get('/ui/accept.js',function(req,res)
{

    res.sendFile(path.join(__dirname, 'ui', 'accept.js'));
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

app.get('/ui/main.js',function(req,res)
{

    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
 });
/*
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
*/



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
