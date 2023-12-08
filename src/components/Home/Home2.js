import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/laptop cat.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A develoer turning coffe into code since 2022 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C#, Java and Node. </b>
              </i>
              <br />
              <br />
              My interest is to grow, evolve, and contribute. I believe I have great  &nbsp;
              <i>
                <b className="purple">My interest is to grow, evolve, and contribute. I believe I have great  </b> and am ready to put it into practice, pursuing new {" "}
                <b className="purple">
                challenges.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion into developing products with  
              <b className="purple"> Node.js, C#, .NET</b> and
              <i>
                <b className="purple">
                  {" "}
                  building Web APIs
                </b>
              </i>
              &nbsp; utilizing 
              <i>
                <b className="purple"> Docker</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/atir75"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maria-rita-mendon%C3%A7a-559048167/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
