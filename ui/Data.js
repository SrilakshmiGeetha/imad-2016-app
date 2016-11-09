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
   // res.send(JSON.stringify(array));
    var id=array.id;
    var name=array.Name;
    var templates=
    `
    <html>
    <head>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                ${id}
            </div>
            <div>
                ${name}
            </div>
        </div>
    </body>
    </html>
    `
    return templates;    
}
  



    console.log("connection made");
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