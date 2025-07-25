// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeIn = (direction = "up") => {
  const variants = {
    up: { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, show: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } },
  };
  return variants[direction];
};

function App() {
  const [openedSections, setOpenedSections] = useState([]);

  const sections = [
    'About Me', 'Skills', 'Projects',
    'Education', 'Experience',
    'Certifications & Courses', 'Contact'
  ];

  const publicPath = process.env.PUBLIC_URL;

  return (
    <div className="App">
      <motion.header
        className="header"
        initial="hidden"
        animate="show"
        variants={fadeIn("top")}
        transition={{ duration: 2.0 }}
      >
        <h1
          onClick={() => setOpenedSections(sections)}
          style={{ cursor: 'pointer' }}
        >
          GOHIL ABHIRAJ GHANSHYAMSINH
        </h1>
        <p>Creative Full Stack Developer</p>
        <div className="socials">
          <a href="https://github.com/ABHIRAJ022" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/abhirajsinh-ghanshyamsinh-gohil-b34925332" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </motion.header>

      {sections.map((section) =>
        openedSections.includes(section) && (
          <React.Fragment key={section}>
            {section === 'About Me' && (
              <motion.section className="section gradient-bg1" initial="hidden" animate="show" variants={fadeIn("left")} transition={{ duration: 3.5 }}>
                <h2>About Me</h2>
                <p>Motivated B.Tech student with strong skills in HTML, CSS, JavaScript, Java, Python, and MongoDB. Seeking a Full Stack Development internship to apply my knowledge in developing responsive and scalable web applications while learning from real-world challenges.</p>
              </motion.section>
            )}
            {section === 'Skills' && (
              <motion.section className="section gradient-bg2" initial="hidden" animate="show" variants={fadeIn("right")} transition={{ duration: 4.5 }}>
                <h2>Skills</h2>
                <ul>
                  <li>HTML, CSS, JavaScript, Java, SQL, Python</li>
                  <li>React, Node.js, Express, MongoDB, Tailwind CSS, Bootstrap</li>
                  <li>Project Development, Leadership & Teamwork</li>
                  <li>Multitasking, Active Listening</li>
                </ul>
              </motion.section>
            )}
            {section === 'Projects' && (
              <motion.section className="section gradient-bg3" initial="hidden" animate="show" variants={fadeIn("left")} transition={{ duration: 5.5 }}>
                <h2>Projects</h2>
                <div className="project">
                  <h3>Farmers Selling  (Group Project)</h3>
                  <p>Created an online platform where farmers can sell their products directly to buyers. Included product listings, user registration, and cart functionality. Backend deployed on Vercel, frontend hosted on GitHub Pages.</p>
                  <p><strong>Tech Used:</strong> HTML, CSS, JAVASCRIPT, PYTHON ,Payment(UPI, RazorPay)</p>
                  <br />
                  <h3>Farmers Market</h3>
                  <p>A creative e-commerce platform where farmers create stores and sell fresh produce directly to consumers, eliminating middlemen and increasing farmer profits.</p>
                  <p><strong>Tech Used:</strong> React, Node.js, Tailwind, MongoDB, HTML, JavaScript</p>
                  <p><a href="https://github.com/ABHIRAJ022" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
              </motion.section>
            )}
            {section === 'Education' && (
              <motion.section className="section gradient-bg" initial="hidden" animate="show" variants={fadeIn("right")} transition={{ duration: 6.5 }}>
                <h2>Education</h2>
                <p><strong>B. Tech in Information Technology</strong><br />Silver Oak College of Engineering and Technology, Ahmedabad<br />July 2023 – Present (5th Sem), <a href={`${process.env.PUBLIC_URL}/RESULT.jpg`} target="_blank" rel="noopener noreferrer">Score: 9.08 CPI</a></p>
                <p><strong>HSC – Science (A Group)</strong><br />Mother Zainab Jr. Science College, Lilajpur, Dholka<br />June 2022 – May 2023 –<a href={`${process.env.PUBLIC_URL}/12TH.jpg`} target="_blank" rel="noopener noreferrer"> PR: 89.20</a></p>
                <p><strong>SSC</strong><br />Gopaldas Shivlal Patel Secondary School, Bavla, Ahmedabad<br />June 2020 – May 2021 – <a href={`${process.env.PUBLIC_URL}/10TH.jpg`} target="_blank" rel="noopener noreferrer">PR: 94.52</a></p>
              </motion.section>
            )}
            {section === 'Experience' && (
              <motion.section className="section gradient-bg" initial="hidden" animate="show" variants={fadeIn("left")} transition={{ duration: 7.5 }}>
                <h2>Experience</h2>
                <p><a href={`${publicPath}/CAC_WaySpire.jpg`} target="_blank" rel="noopener noreferrer"><strong>Campus Ambassador Intern</strong></a><br />Dec 2024 – Jan 2025</p>
              </motion.section>
            )}
            {section === 'Certifications & Courses' && (
              <motion.section className="section gradient-bg" initial="hidden" animate="show" variants={fadeIn("right")} transition={{ duration: 8.5 }}>
                <h2>Certifications & Courses</h2>
                <ul>
                  <li><a href={`${process.env.PUBLIC_URL}/Google_Cloud_Career_Launchpad_Cybersecurity_track.jpg`} target="_blank" rel="noopener noreferrer"><b>Google Cloud</b> Career Launchpad – Cybersecurity, May 2025</a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/JavaScript_Training.jpg`} target="_blank" rel="noopener noreferrer"><b>JavaScript</b> Training – Spoken Tutorial, Mar 2025 (Score: 80%)</a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/command_line_linux.jpg`} target="_blank" rel="noopener noreferrer">Command Line in Linux – <b>Coursera</b>, Mar 2025</a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/CSS.jpg`} target="_blank" rel="noopener noreferrer"><b>CSS</b> Training – Spoken Tutorial, Feb 2025 (Score: 77.5%)</a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/DBMS.jpg`} target="_blank" rel="noopener noreferrer">DBMS – <b>Coursera</b>, Feb 2025</a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/HTML.jpg`} target="_blank" rel="noopener noreferrer"><b>HTML</b> Training – Spoken Tutorial, Sep 2024 (Score: 50%)</a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/introduction_to_bash_shellscript.jpg`} target="_blank" rel="noopener noreferrer">Intro to Bash Scripting – <b>Coursera</b>, Mar 2025</a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/OSDATACAMP.jpg`} target="_blank" rel="noopener noreferrer">Intro to Bash Scripting – OSDatacamp, Mar 2025</a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/JAVADATACAMP.jpg`} target="_blank" rel="noopener noreferrer"><b>OOP</b> in <b>Java</b> – DataCamp, Mar 2025</a></li>
                  <li>Magic of Mathematics</li>
                  <li><a href={`${process.env.PUBLIC_URL}/AIA.jpg`} target="_blank" rel="noopener noreferrer">AI Agent – <b>IBM Skill Build</b> </a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/RMs.jpg`} target="_blank" rel="noopener noreferrer">Rise of Multiagent Systems – <b>IBM Skill Build</b></a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/UPAIA.jpg`} target="_blank" rel="noopener noreferrer">Unleashing The Power of AI Agent – <b>IBM Skill Build</b></a></li>
                  <li><a href={`${process.env.PUBLIC_URL}/BWD.jpg`} target="_blank" rel="noopener noreferrer">Become a Web Developer – <b>IBM Skill Build</b></a></li>
                </ul>
              </motion.section>
            )}
            {section === 'Contact' && (
              <motion.section className="section gradient-bg" initial="hidden" animate="show" variants={fadeIn("up")} transition={{ duration: 9.5 }}>
                <h2>Contact</h2>
                <div className="resume-button">
                  <a href={`${publicPath}/resume.pdf`} download className="download-btn">Download Resume (PDF)</a>
                </div>
                <p>Email: <a href="mailto:abhirajsinhggohil@gmail.com">abhirajsinhggohil@gmail.com</a></p>
                <p>Call: <a href="tel:+919601270941">+91 9601270941</a></p>
              </motion.section>
            )}
          </React.Fragment>
        )
      )}

      {openedSections.length > 0 && (
        <footer className="footer">
          <p>&copy; GOHIL ABHIRAJ GHANSHYAMSINH</p>
        </footer>
      )}
    </div>
  );
}

export default App;
