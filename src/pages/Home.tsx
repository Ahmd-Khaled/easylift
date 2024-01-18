import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/banner/Banner";
import Helmet from "../components/helmet/Helmet";
import styles from "../styles/home.module.css";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";
import LatestProjects from "../components/latestProjects/LatestProjects";
import GetInTouch from "../components/getInTouch/GetInTouch";
import ContactUs from "../components/contactUs/ContactUs";
import Blog from "../components/blog/Blog";

const Home = () => {
  return (
    <Helmet title=" | الرئيسية">
      <div className="banner-main-area">
        <Banner />
      </div>

      <section className={styles.services}>
        <Container>
          <Row>
            <Col lg="12" className="text-center p-5" >
              <span className="span-title">خدماتنا</span>
              <h3 className="section-title">فرصة تقديم خدمة عالية الجودة</h3>
            </Col>
            <Services />
          </Row>
        </Container>
      </section>
      <About />
      <Portfolio />



      {/* ------------Ahmed Part-------------------- */}
      
      <LatestProjects />   
      <Container>
          <Row>
            <Blog />
          </Row>
        </Container>  
      <ContactUs />
      <Container>
          <Row>
            <GetInTouch />
          </Row>
        </Container>
    </Helmet>
  );
};

export default Home;
