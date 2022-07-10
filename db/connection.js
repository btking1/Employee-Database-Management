import mysql from 'mysql2';


// Connect to database
export const db = mysql.createConnection(
    {
      host: 'localhost',
      //MySQL username,
      user: 'root',
      //MySQL password
      password: 'Adventstar789*',
      database: 'company'
    },
    console.log('Connected to the company database.')
  );

  // module.exports = db;