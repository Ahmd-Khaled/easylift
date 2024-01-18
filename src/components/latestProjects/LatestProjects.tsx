import { PiPlusBold } from "react-icons/pi";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.css";

const LatestProjects = () => {
  return (
    <div className={styles.latestProjects}>
      <Container>
        <Row>
          <div className={styles.container}>
            <div className={styles.top}>
              <p className={styles.smTitle}>LATEST PROJECTS</p>
              <h3 className={styles.title}>
                EXCELLENCE DRIVEN FOR GETTING
                <br />
                UNRIVALED RESULTS.
              </h3>
            </div>
            <ul className={styles.projectsList}>
              <ProjectItem
                img="proj-icon-01.svg"
                num={3526}
                text="Tons Of Customers"
              />
              <ProjectItem
                img="proj-icon-02.svg"
                num={3024}
                text="Compleated Project"
              />
              <ProjectItem
                img="proj-icon-03.svg"
                num={325}
                text="Team Members"
              />
              <ProjectItem
                img="proj-icon-04.svg"
                num={56}
                text="Upcoming Projects"
              />
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LatestProjects;
// ---------------------------------------------------------
// var process: NodeJS.Process
// var env: NodeJS.ProcessEnv;


type projectType = {
  img: string;
  num: number;
  text: string;
};

// : projectType

export const ProjectItem = ({ img, num, text }: projectType) => {
  return (
    <li className={styles.projItem}>
      <div className={styles.itemWrapper}>
        <div className={styles.image}>
          <img src={`/images/${img}`} alt="icon" />
        </div>
        <h2 className={styles.projNum}>
          <span>{num}</span>
          <PiPlusBold />
        </h2>
        <p className={styles.projText}>{text}</p>
      </div>
    </li>
  );
};
