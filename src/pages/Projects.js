import React from "react";
import inperson from "../assets/inperson.webp";
import license from "../assets/license.png";
import twitter from "../assets/TWITTER.jpeg";
import parkway from "../assets/parkway.webp";
import "./Projects.css";
import Header from "../components/Header";

import "../styles/style.css";

function Projects() {
  const projects = [
    { 
      src: parkway, 
      alt: "Parkway", 
      title: "Parkway Application", 
      text: [ "• Implemented a web application in Angular and NodeJS that enables users to find available parking spaces using API, and make parking reservations.", <br/>,
        "• Developed responsive UI with Angular, achieving a 90% increase in user engagement.",<br/>,
        "• Leveraged Spring Boot for backend, reducing response time by 40%. Developed Node.js APIs, enhancing scalability by 70%."
      ]
    },
    { 
      src: inperson, 
      alt: "In-Person", 
      title: "Automatic Person Detection In Search And Rescue Operations", 
      text: [
        "• Generated an automated system that analyzes a given image, identifies the humans, and announces if there are any people in a given image.",<br/>,
        "• Achieved a remarkable accuracy rate of 75% in detecting humans within images using Python and OpenCV’s Histogram of Gradients.",<br/>,
        "• Leveraging cutting-edge machine learning techniques, it significantly reduced false positives to just 2% while ensuring robust performance across diverse image datasets. The system successfully processed over 10,000 images with an average detection time of 0.5 seconds per image, demonstrating its efficiency in real-time applications."
      ]  
    },
    { 
      src: license, 
      alt: "License", 
      title: "Automatic Person Detection In Search And Rescue Operations Project", 
      text: [[
        "• Pioneered 55% accuracy in real-time number plate detection using YOLOv5, reducing false positives by 20%, enhancing surveillance systems’ efficiency.",<br/>,
        "• Implemented an efficient image processing pipeline, reducing detection time to 0.5 seconds per frame, enabling rapid deployment in traffic management solutions.",<br/>,
        "• Integrated advanced pre-processing techniques, resulting in a 60% success rate in detecting obscured or partially visible number plates, enhancing overall system robustness."
      ] ] 
    },
    { 
      src: twitter, 
      alt: "Twitter", 
      title: "Faceted Search Engine on Twitter Data", 
      text: [
        "• Deployed a Java Web Application in AWS using Tomcat to efficiently retrieve top tweets based on specific queries.",<br/>,
        "• Initiated an end-to-end Information Retrieval (IR) model with a content ingestion and indexing system, achieving a throughput of 1000 tweets per minute.",<br/>,
        "• Implemented search functionalities with an average response time of 100 milliseconds. Incorporated topic categorization with an accuracy of 60%, and sentiment analysis for visualization, achieving an accuracy of 45%."
      ]
      
    },
    
  ]
  return (
    <div className="container-fluid p-0">
      <Header />

      <div className="projects">
        <h1>My Personal Projects</h1>

        <div className="image-text-container">
          {projects.map((item, index) => (
            <div className="image-text-pair" key={index}>
              <img src={item.src} alt={item.alt} />
              <div className="text-content">
                <h3 className="image-title">{item.title}</h3>
                <p className="image-description">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;