import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import weatherApp from "../../Assets/Projects/weatherApp.png";
import controlGym from "../../Assets/Projects/controlGym.png";
import nacion from "../../Assets/Projects/nacion.png";

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
              imgPath={nacion}
              isBlog={false}
              title="La Nacion"
              description="I developed a replica of the La Nación website as part of a technical challenge, using React for the UI construction and React Router DOM to manage navigation. I integrated FontAwesome for icons and used Bootstrap along with Tailwind CSS for a responsive design. HTTP requests were handled with React-Axios, and I optimized the project through React Scripts from Create React App. I implemented tests with Jest and React Testing Library to ensure functionality and used TypeScript for clean, well-structured code, measured and optimized."
              ghLink="https://github.com/WalRol/acumulado2"
              demoLink="https://acumulado2-vlhv.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={controlGym}
              isBlog={false}
              title="Control-Gym"
              description="I developed a gym management app for client check-ins and user administration. Built with React and React Router DOM for dynamic navigation, the app uses Tailwind CSS and Bootstrap for responsive design, and Axios for secure data handling. React Query synchronizes client data, with form validation by React Hook Form and Yup. TypeScript and Jest ensure quality code and reliable functionality, with Vite and ESLint streamlining development."
              demoLink="https://control-gym.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="WeatherApp"
              description="I developed a single-page weather application that displays key climate data for three locations simultaneously. The app is built with React and styled using Tailwind CSS for responsive design. Animations are powered by Framer Motion for a smooth user experience, and React Icons are used to visually enhance weather data. Vite and ESLint streamline development, ensuring fast performance and clean code.."
              ghLink="https://github.com/WalRoldan/weatherApp"
              demoLink="https://weather-app-eight-zeta-67.vercel.app/"
            />
          </Col>
          {/*  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
