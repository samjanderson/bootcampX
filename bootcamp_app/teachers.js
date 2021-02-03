const { Pool } = require('pg');

//this is creating a new instance of a class that allows us to connect to the database, this is how we query wirh node-postgres
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


//we use rows in our then because we can see that rows property contains an array of the expected results
pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});


// My incorrect answer
// pool.query(`
// SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
// FROM assistance_requests
// JOIN teachers ON teacher_id = teachers.id
// JOIN students ON student_id = students.id
// JOIN cohorts ON cohort_id = cohorts.id
// WHERE cohorts.name LIKE '%${process.argv[2]}%'
// ORDER BY teachers.name;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.cohort}: ${user.teacher}`);
//   })
// })
// .catch(err => console.error('query error', err.stack));


