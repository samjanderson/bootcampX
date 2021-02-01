SELECT sum(assignment_submissions.duration) as total_duration
 FROM assignment_submissions
 JOIN students ON students.id = student_id
 JOIN cohorts ON cohort_id = cohorts.id
 WHERE cohorts.name = 'FEB12';


--  I had everything right except used cohorts.star_date instead of cohorts.name