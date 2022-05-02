import mysql from 'mysql';

const db = mysql.createConnection({
  host: '163.172.130.142',
  user: 'etudiant',
  port: 3310,
  password: 'CrERP29qwMNvcbnAMgLzW9CwuTC5eJHn',
  database: 'sakila'
});

db.connect();

export function makeQuery(query, values) {

  return new Promise((resolve, reject) => {
    db.query(query, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
