SELECT assignments.id AS id, assignments.name AS name, assignments.day AS day, assignments.chapter AS chapter, COUNT(assistance_requests) AS total_requests
FROM assistance_requests
JOIN assignments ON assignment_id = assignments.id
GROUP BY assignments.id
ORDER BY total_requests DESC;

-- their syntax was a lot cleaner
-- SELECT assignments.id, name, day, chapter, count(assistance_requests) as total_requests
-- FROM assignments
-- JOIN assistance_requests ON assignments.id = assignment_id
-- GROUP BY assignments.id
-- ORDER BY total_requests DESC;