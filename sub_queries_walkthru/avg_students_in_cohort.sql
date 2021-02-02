-- SELECT count(students)
-- FROM students
-- JOIN cohorts on cohorts.id = cohort_id
-- GROUP BY cohorts;

SELECT count(students) as total_students
FROM students
JOIN cohorts on cohorts.id = cohort_id
GROUP BY cohorts;