var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto=require('crypto');
var app = express();
app.use(morgan('combined'));

var Pool = require('pg').Pool;
var config=
{
    user: 'srilakshmigeetha',
    database: 'srilakshmigeetha',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};
var pool= new Pool(config);
function template(array)
{
  var id=array.id;
  var names=array.Name;
  var htmltemplate=
    `
    <html>
    <head>

        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
            <div>
                ${id}
            </div>
            <div>
                ${names}
            </div>
        </div>
    </body>
    </html>
    `
    return htmltemplate;    
}
app.get('/hangman', function (req, res) {
  
pool.query('SELECT * FROM personalities WHERE id<3',function(err,result)
{
  if(err)
    {
        console.log("Hello");
        res.status(500).send(err.toString());
    }
    else
    {
        if(result.rows.length === 0)
        {
            res.status(404).send('Not found');
        }
        else
        {
            var array=result.rows[0];
            res.send(template(array));
            //     res.send(JSON.stringify(result[0]));
             //   res.send(JSON.stringify(array));
        }
    }
        
});
});
    
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
    var hashed=crypto.pbkdf2Sync(input,salt,1000,512,'sha512');
    return ["pbkdf2","1000",salt,hashed.toString('hex')].join('$');
}
app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/create-user',function(req,res)
{
   var username=req.params.username;
   var password=req.params.password;
   var salt=crypto.randomBytes(128).toString('hex');
   pool.query('INSERT INTO "user" (username,password) VALUES ($1,$2)', [username,dbString],function(err,result)
   {
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
app.get('/ui/favicon.ico',function(req,res)
{
    res.sendFile(path.join(__dirname,'ui','favicon.ico'));
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

app.get('/ui/main.js',function(req,res){

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
