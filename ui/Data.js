var peeps=document.getElementById('people');
var id=document.getElementById('idd');
var names=document.getElementById('namee');
peeps.onclick=function()
{
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
   id.innerHTML=array.id;
   names.innerHTML=array.Name;
    
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
                template(array);
            //     res.send(JSON.stringify(result[0]));
             //   res.send(JSON.stringify(array));
                
                
            }
        }
        
    });
}