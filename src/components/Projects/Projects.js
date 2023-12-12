import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CRUDC from "../../Assets/Projects/CRUDcshap.png";
import starbucks from "../../Assets/Projects/starbucks.png";
import Memorygame from "../../Assets/Projects/gameJSproj.png";
import Java from "../../Assets/Projects/javaCRUD.png";
import suicide from "../../Assets/Projects/suicide.png";
import API from "../../Assets/Projects/projetoAPINode.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Java}
              isBlog={false}
              title="Java CRUD"
              description="A Java project, built with Maven, incorporates an external maps API for a people registration system. The application allows CRUD operations on individual records, emphasizing address management through map integration."
              ghLink="https://github.com/atir75/Java-CRUD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={API}
              isBlog={false}
              title="API Node.js with Docker"
              description="Embark on a Node.js API project that delves into Docker concepts, providing an opportunity to enhance proficiency in both Node.js and containerization principles."
              ghLink="https://github.com/atir75/todoList_NodeDocker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Memorygame}
              isBlog={false}
              title="Memory game"
              description="A memory game created with JavaScript to enhance programming concepts and skills in web development. The game focuses on improving programming logic, DOM manipulation, and user interactivity. It features card flipping, pair matching mechanics, and visual feedback to reinforce practical understanding of fundamental JavaScript concepts, providing a hands-on educational experience."
              ghLink="https://github.com/atir75/Memory-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRUDC}
              isBlog={false}
              title="C# CRUD"
              description="A C# CRUD application for book registration enables Create, Read, Update, and Delete operations. It offers a user-friendly interface for efficient management of book records, including features for adding, viewing, updating, and deleting entries, demonstrating practical implementation of CRUD functionality in C#."
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starbucks}
              isBlog={false}
              title="A website for Starbucks"
              description="Crafted entirely with pure HTML and CSS, stands as one of the initial projects I undertook in frontend development. 
              It showcases my early skills in creating a visually appealing and functional web presence without relying on additional frameworks or libraries"
              ghLink="https://github.com/atir75/starbucks-page"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
