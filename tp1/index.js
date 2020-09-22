const express = require('express');
const mysql=require('mysql');

const app = express();

let db = mysql.createConnection({
  host:"localhost",
  user: "root",
  password:"root",
  database:"web_courses",
  port:"8889"
});

app.get('/', function(req,res){
db.query("SELECT * FROM test", function(err, result, fields){;
    if(err) throw err;

    let response = {"page": "home", "result": result };
    res.send(JSON.stringify(response));
  });
});

app.listen(3000, function() {
  db.connect(function(err) {
    if (err) throw err;
    console.log('Connection to database successful!');
  });
  console.log('Example app listening on port 3000!');
});
