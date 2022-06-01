const mysql = require('mysql')

const dbConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'NyxCarnyx@728113',
    database : '5thSemMini'
});

dbConnection.connect((error) => {
    if(!!error){
        console.log(error);
    } else {
        console.log('Connected...!')
    }
});

module.exports = dbConnection;