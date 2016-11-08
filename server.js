var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var config=
{
    user: 'srilakshmigeetha',
    database: 'srilakshmigeetha',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};
var pool= new Pool(config);
app.get('/test',function(err,result)
{
pool.query('SELECT * FROM Personalities',function(err,result)
{
    if(err)
    {
        res.status(500).send(err.toString());
    }
    else
    {
        if(result.wrongs.length === 0)
        {
            res.status(404).send("Not found");
        }
        res.send(JSON.stringify(result));
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
app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'ui','index.html'));
});
app.get('/favicon.ico',function(req,res)
{
    res.sendFile(_dirname,'favicon.ico');
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
