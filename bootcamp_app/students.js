const { Pool } = require('pg');

//this is creating a new instance of a class that allows us to connect to the database, this is how we query wirh node-postgres
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

//now we are connected to the database so we can start writing SQL queries
//this is using a method from the class that makes a query to the database for us and then returns a promise
pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));




// When we're using terminal to execute SQL queries, we first have to connect to the database using a client app like psql. If we wanted to connect to the bootcampx database,
//  we could enter psql bootcampx into terminal.This will connect us to a PostgreSQL database running on localhost port 5432 with the user vagrant.
// We haven't explicitly stated any of those options, but we could:
// psql -h localhost -p 5432 -U vagrant bootcampx