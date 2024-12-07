import React from "react";
import Header from "../components/Header";

const Skills = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5"></h2>
            <div class="subheading mb-3"></div>
            <ol className="list">
          
            <h2> Programming Languages:</h2>
            <span>
            C, C++, Java, Python.
            </span>
          
            <h2>Web Technologies:</h2>
            <span>
            HTML, CSS , React,Angular, Docker,Node.js, Java Spring boot, GIT.
            </span>
          
            <h2>Databases:</h2>
            <span>MySQL, SQL server , MongoDB.</span>

            <h2>Cloud Technologies:</h2>
            <span>AWS (EC2), Microsoft Azure</span>

            <h2>Software Tools:</h2>
            <span> IntelliJ, Visual Studio, Eclipse</span>

            <h2>Proficiency Forte:</h2>
            <span>  Data Structures, Design and Analysis of Algorithms</span>

         
        </ol>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Skills;
