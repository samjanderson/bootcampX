SELECT cohorts.name AS cohort, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id 
GROUP BY cohorts.name
ORDER BY count(assignment_submissions.*) DESC;

-- the only difference with the answer they gave was they used total_submissions in the ORDER BY as it is recognized since SELECT is looked at first before ORDER BY