var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
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
/*var articleOne=
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
*/
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
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

/*var count=0;
app.get('/:articleName', function (req, res) {
    count=count+1;
    var articleName=req.params.articleName;
  //  res.send(count.toString());
    res.send(createpage(articles[articleName]));
  
});*/
app.get('/ui/main.js',function(req,res){

    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
