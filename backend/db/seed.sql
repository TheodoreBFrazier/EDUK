\c data_dev;


INSERT INTO mentors(mentor_fname, mentor_lname, bio, email, speciality, is_verified) VALUES 
('Greg', 'Testo', 'Experienced software entrepreneur extremely passionate about technology. You will find me working on projects using Java, TypeScript, JavaScript, Spring Boot, Angular and React. More recently I’ve been diving into the world of smart contracts, NFTs, blockchain, finTech and cryptocurrencies. ', 'greggggggrrr4556@gmail.com', 'Soft Engineer', true),
('Nataja', 'Flood', 'I am the Career Service Program Manager at Pursuit, where I help adult learners prepare for their transition into the tech industry through individualized coaching, brand development workshops, and interview preparation sessions grounded in data and research.', 'Natajafffff@gmail.com', 'Career Training', true),
('Lakisha', 'Gonsalves', 'My greatest strength is my ability to believe. To believe that potential is everywhere, that growth is never complete, and that everyone deserves equitable access to education.', 'LaKESHAAAAAA@gmail.com', 'Soft Skills', true),
('Lillian', 'Schenck', 'I am a seasoned educational leader with significant success and experience as an instructional coach and public school administrator. My expertise lies in leading schools in achieving a rigorous academic and cultural vision through targeted teacher coaching and development, the organization and facilitation of job-embedded professional development, participation as a curriculum liason and thought partner, organizing and ensuring the dissemination of observational feedback and support, and creating a positive and proactive school culture informed by a growth mindset. ', 'Liiiiilian@gmail.com', 'Nursing', true),
('Jess', 'Lam', 'I am a seasoned educational leader with significant success and experience as an instructional coach and public school administrator. My expertise lies in leading schools in achieving a rigorous academic and cultural vision through targeted teacher coaching and development, the organization and facilitation of job-embedded professional development, participation as a curriculum liason and thought partner, organizing and ensuring the dissemination of observational feedback and support, and creating a positive and proactive school culture informed by a growth mindset. ', 'Jesss@gmail.com', 'Math', false);

INSERT INTO users (mentor_id, first_name, last_name, age, email, user_name, password) VALUES
(1, 'Nima', 'Sherpa', 20, 'nimaSherpa123@gmail.com', 'ninan', '12345'),
(2, 'David', 'Vidals', 25, 'DavidVVVV333@gmail.com', 'ddddvidiall', '12345'),
(1, 'Lili', 'Huang', 60, 'lilyhuang1111@gmail.com', 'lililihuang', '12345'),
(3, 'Mukayila', 'Alao', 35, 'MKalao888@gmail.com', 'mula', '12345'),
(2, 'Theodore', 'Frazier', 40, 'theodoreFF1@gmail.com', 'thfrazi', '12345'),
(4, 'Samantha', 'Shapland', 18, 'SamShapland789@gmail.com', 'samanthasssss', '12345');

INSERT INTO resources(resource_name, description, resource_category, resourceFor, start_datetime, end_datetime, url, is_verified) VALUES
('Project Basta', 'To create a bridge of opportunity  between employers and first-generation college goers of color to increase knowledge workforce diversity at all levels.', 'Program', ARRAY [ 'highschool','college' ] ,  'N/A', 'N/A', 'https://projectbasta.com/', true),
('Bottom Line', 'Bottom Line has addressed the low college graduation rates of first-generation students from low-income backgrounds. Our organization was founded on the belief that students need a mentor and a guide during the college application process and throughout college to succeed. By providing consistent one-on-one support, Bottom Line has helped thousands of first-generation students from low-income backgrounds stay in college and complete their degrees. ', 'Program', ARRAY [ 'highschool','college' ] , 'N/A', 'N/A', 'https://www.bottomline.org/', true),
('Pursuit', 'We train adults with the most need and potential to get their first tech jobs, advance in their careers, and become the next generation of leaders in tech.', 'Program', ARRAY [ 'highschool','college' , 'continue learning' ] ,  'Feb 24 2022 05:00 PM (EST)', 'Jun 20 2022 11:59 PM (EDT)', 'https://www.pursuit.org/ ', true),
('Gates Millennium Scholars ', 'Funded by the Bill and Melinda Gates foundation, Gates Millennium Scholarships reduce financial hardship for low-income minority families preparing to send members to college. African Americans, Hispanics, Native Americans/Alaskan Natives, and Asian Pacific Islanders are invited to apply for one of the 1000 annual Millennium Scholarships, each of which provides a full financial ride through graduation.', 'Scholarship', ARRAY [ 'highschool','college', 'continue learning'] , 'N/A', 'N/A', 'http://www.gmsp.org/', true),
('Abercrombie & Fitch Scholarship Progra', 'In conjunction with the United Negro College Fund (UNCF), Abercrombie & Fitch provides a scholarship program for African American students from low income families. The scholarships are valued at $3,000 each, for first year students enrolled at four-year universities.', 'Scholarship', ARRAY [ 'highschool','college' ] ,  'N/A', 'N/A', 'http://www.uncf.org/sections/ForS', true),
('Sallie Mae Funding', 'Sallie Mae provides loans to both recent high school graduates and older individuals seeking to return to school. Their website has a section dedicated to returning adults or non-traditional students. This segment has a frequently asked questions section that handles concerns older individuals may have about balancing school and work or school and family, among other issues.
', 'Scholarship', ARRAY [ 'highschool','college' , 'contiue learning' ], 'N/A', 'N/A', 'https://www.salliemae.com/about/scholarship-opportunities/', true),
('The Point Foundation', 'The Point Foundation is an example of a foundation that provides scholarships and grants to LGBT students. This foundation offers tuition assistance which does not have to be paid back; the student must maintain a 3.0 GPA and complete a community service project after graduation. Students who are interested in this program can apply online at the Point Foundation’s website.
', 'Scholarship', ARRAY [ 'highschool','college' ], 'N/A', 'N/A', 'http://www.pointfoundation.org/index10.html', true),
('NPL Free english Classes', 'The New York Public Library helps adult students improve their communication skills in English. We offer two types of English classes, available at more than 40 libraries in the Bronx, Manhattan, and Staten Island.
', 'Class', ARRAY [ 'highschool','college', 'continue learning' ], 'N/A', 'N/A', 'https://www.nypl.org/events/classes/english', true),
('CS50s Introduction to Computer Science', 'An introduction to the intellectual enterprises of computer science and the art of programming', 'Class', ARRAY [ 'highschool','college' , 'continue learning'], 'January 1 2019', 'December 31 2022', 'https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0 ', true),
('NYC: Information Technology Career Seeker', 'The main purpose of this group is to help people to launch their career in Software and Information technology.', 'Class', ARRAY [ 'highschool','college' , 'continue learning' ] , 'N/A', 'N/A', 'https://www.meetup.com/Information-Technology-Career-Seeker/', true),
('NY ESL English conversations online', 'English practice and sometimes programming workshops for all levels. This meetings will always be online.
We meet together to speak English. This group is for all with any English language level who want to practice English speaking, meet people, speak to each other, and train speaking skill with conversations. ', 'Class', ARRAY [ 'highschool','college' , 'continue learning' ], 'N/A', 'N/A', 'https://www.meetup.com/esl-free-conversations-google-meet/', true);


INSERT INTO users_resources(uid, resource_id) VALUES
(1, 3),
(1, 4),
(1, 11),
(2, 3),
(2, 1),
(2, 2),
(3, 3),
(3, 5),
(3, 6),
(3, 7),
(4, 3),
(4, 8),
(5, 3),
(5, 9),
(5, 10);
