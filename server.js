const express = require('express');
const app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// router 라고 한다 (spring 에서 controller 역할을 하는거 같다...)
app.get('/', function (req, res) {
    res.render('index.html')
});

app.get('/about', function (req, res) {
    res.render('about.html')
});

const server = app.listen(5654, () =>{
    console.log('Start Server : localhost:3000');
});

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '13.125.195.76',
  user            : 'admin_skuley',
  password        : 'potatochip-1993',
  database        : 'admin_nodejs'
});

app.get('/db', function (req, res) {

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        
        // Use the connection
        connection.query('SELECT * FROM TestDB', function (error, results, fields) {
            res.send(JSON.stringify(results));
            console.log('results', results);
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) throw error;
        
            // Don't use the connection here, it has been returned to the pool.
        });
    });

});