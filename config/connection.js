var mysql = require("mysql"); 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "5407354680",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err; 
    console.log("connected as id " + connection.threadId); 

});