SELECT cohorts.name AS cohort_name, count(students.cohort_id) AS student_count
FROM cohorts
JOIN students ON cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING count(students.cohort_id) >= 18;

-- Where I have students.cohort_id they have students.* in the counts