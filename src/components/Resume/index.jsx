import React from "react";
import "./style.css";

function Resume() {
  return (
    <div className="resumeCont">
      <header>
        <h1>Muhammad Bilal Akram</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Welcome to my website! I am a highly skilled Full Stack Developer
            with a passion for creating innovative and cutting-edge software
            solutions. With a strong background in both front-end and back-end
            development, I am dedicated to building user-friendly and scalable
            applications that meet the unique needs of my clients. My expertise
            lies in a wide range of programming languages, including HTML, CSS,
            JavaScript, TypeScript. I am well-versed in popular frameworks and
            libraries such as React, Next, React-Native, Node.js. I used MongoDB
            and Firebase as DBMS. Whether it's developing a web or mobile
            application, I have the knowledge and experience to create a product
            that is both visually stunning and highly functional. I take great
            pride in my work, and I am committed to delivering projects on time
            and within budget. I also believe in maintaining clear and open
            communication with my clients, ensuring that they are always
            informed and involved throughout the development process. If you are
            looking for a skilled and dedicated Full Stack Developer to help
            bring your ideas to life, please don't hesitate to get in touch. I
            would be delighted to discuss your project and help turn your vision
            into a reality.
          </p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>Gamica Cloud</h3>
              <p>Position: Web Developer</p>
              <p>Date: 2019 - 2021</p>
              <p>Description: Training Hybrid Development.</p>
            </li>
            <li>
              <h3>TopSol</h3>
              <p>Position: Junior Web Developer</p>
              <p>Date: 2021 - 2022</p>
              <p>
                Description: Worked on both React and React Native Projects.
              </p>
            </li>
            <li>
              <h3>TopSol</h3>
              <p>Position: Full Stack Developer</p>
              <p>Date: 2022 - Present</p>
              <p>
                Description: Made Websites and Mobile Applications using
                different technologies.
              </p>
            </li>
          </ul>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Life Mib</h3>
              <p>Insurance Website</p>
              <p>
                <a href="https://lifemib.com/" target="_blank">
                  Life Mib URL
                </a>
              </p>

              <p>
                Description: This is an insurance website which is scheduled
                meetings and calls , handling through appointment, leads and
                deals sections, also have stripe payment method for premium
                facilities, This Website is made with NextJs, MongoDB,
                TypeScript.
              </p>
            </li>
            <li>
              <h3>VCity</h3>
              <p>Chat App</p>
              <p>
                Description: Mobile Chat Application made with React-Native,
                Firebase, TypeScript, handling call with twilio.
              </p>
            </li>
            <li>
              <h3>GetYourMission</h3>
              <p>Mission Based App</p>
              <p>
                Description: Mobile Chat Application made with React-Native,
                Firebase.
              </p>
            </li>
          </ul>
        </section>
        <section id="education">
          <h2>Education</h2>
          <ul>
            <li>
              <h3>
                National College of Business Administration and Education (NCBA
                & E)
              </h3>
              <p>Degree: Bachelor of Science in Computer Science</p>
              <p>Date: 2017 - 2021</p>
            </li>
          </ul>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>Next</li>
            <li>React-Native</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>TypeScript</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Phone: +923057401558</p>
          <p>Email: bilalakram.1558@gmail.com</p>
          <p>
            LinkedIn: <a href="#">Insert your LinkedIn URL here</a>
          </p>
        </section>
      </main>
      <footer>
        <p>Copyright &copy; 2023 Muhammad Bilal Akram</p>
      </footer>
    </div>
  );
}

export default Resume;
