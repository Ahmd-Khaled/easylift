import styles from "../styles/services.module.css"
import { Col, Container, Row } from "react-bootstrap"
import service01 from "../assets/service-1.jpg"
import service02 from "../assets/service-2.jpg"
import service03 from "../assets/service-3.jpg"
import About from "./About"

const servicesItems = [
  {
    image: service01,
    title: "نظام مستدام",
    discription:
      "صيانه وأعطال جميع أنواع المصاعد عقود سنوي ونصف سنوي وزيارات قطع الغيار الإيطالي والتركي",
    content: "01",
  },
  {
    image: service02,
    title: "صيانة العقارات",
    discription:
      "صيانه وأعطال جميع أنواع المصاعد عقود سنوي ونصف سنوي وزيارات قطع الغيار الإيطالي والتركي",
    content: "02",
  },
  {
    image: service03,
    title: "التصميم والإنشاء الافتراضي",
    discription:
      "صيانه وأعطال جميع أنواع المصاعد عقود سنوي ونصف سنوي وزيارات قطع الغيار الإيطالي والتركي",
    content: "03",
  },
]

const services = () => {
  return (
    <>
      <Container id="service">
        <Row>
          {servicesItems.map((item, index) => (
            <Col lg="4" md="6" sm="12" className="mb-3" key={index}>
              <div className={styles.serviceCart}>
                <div className={styles.serviceImg}>
                  <img src={item.image} alt="" />
                  <span className={styles.badge}>{item.content}</span>
                </div>

                <div className={styles.serviceItem}>
                  <h5>{item.title}</h5>
                  <p>{item.discription}</p>

                  <button className={styles.btn}>
                    <a href="#">عرض الخدمة</a>
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default services
