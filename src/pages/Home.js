import React from "react";
import Header from "../components/Header";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interest from "./Interest";
import Award from "./Award";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              THRISHITHA
              <span class="text-primary"> DENDI</span>
            </h1>
            <div class="subheading mb-5">
               (346) 414-2946 ·
              <a href="mailto:ajaykumar.boreddy@gmail.com">thrishitha@gmail.com</a>
            </div>
            <p class="lead mb-5">
            Motivated Java Developer with a background in Computer Science Engineering and practical experience in Java, Spring, and database management. Strong foundation in coding best practices and object-oriented design, gained through projects and internships. Known for adaptability, 
            problem-solving, and a commitment to continuous learning. Ready to make a positive impact in a collaborative team.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/thrishitha-reddy/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/AjayBoreddy">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="mailto:thrishitha@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <Experience />
        <Education/>
        <Projects/>
        <Skills/>
        <Interest/>
        <Award/>

      </div>
    </>
  );
};

export default Home;
