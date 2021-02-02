SELECT students.name AS name, count(assistance_requests.*) AS total_assistance
FROM students
JOIN assistance_requests ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY students.name;