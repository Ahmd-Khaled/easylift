import {
  FaArrowLeft,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.css";

const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Container>
          <Row>
            <div className={styles.subscribe}>
              <div className={styles.logo}>
                <img src="/images/easy-logo-transparent.png" alt="logo" className={styles.footerLogo} />
              </div>
              <h2 className={styles.subscTitle}>
                <span>إشترك في النشرة الإخبارية لدينا</span>
                <span>للحصول على آخر التحديثات</span>
              </h2>
              <form className={styles.subscForm}>
                <input type="email" placeholder="البريد الإلكتروني" />
                <button>إشترك</button>
              </form>
            </div>
            <div className={styles.links}>
              <div className={styles.box}>
                <h3 className={styles.fTitle}>عن الشركة</h3>
                <p className={styles.fText}>
                  مؤسسه الأسهل للمصاعد
                  <br />
                  صيانه وأعطال جميع أنواع المصاعد عقود سنوي ونصف سنوي وزيارات
                  قطع الغيار الإيطالي والتركي 
                </p>
                <div className={styles.social}>
                  <a href="/">
                    <FaFacebookF />
                  </a>
                  <a href="/">
                    <FaTwitter />
                  </a>
                  <a href="/">
                    <FaYoutube />
                  </a>
                  <a href="/">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.linksList}>
                  <h3 className={styles.fTitle}>روابط مفيدة</h3>
                  <ul className={styles.fList}>
                    <li className={styles.fItem}>
                      <a href="/">
                        <TbArrowBigLeftFilled />
                        <span>معلومات عنا</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <TbArrowBigLeftFilled />
                        <span>معرضنا</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <TbArrowBigLeftFilled />
                        <span>خدماتنا</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <TbArrowBigLeftFilled />
                        <span>فريقنا</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <TbArrowBigLeftFilled />
                        <span>إتصل بنا</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.linksList}>
                  <h3 className={styles.fTitle}>إتصل بنا</h3>
                  <ul className={styles.fList}>
                    <li className={styles.fItem}>
                      <a href="/">
                        <div className={styles.icon}>
                          <FaPhoneAlt />
                        </div>
                        <span>0556943009</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <div className={styles.icon}>
                          <FaPhoneAlt />
                        </div>
                        <span>0556943009</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <div className={styles.icon}>
                          <HiOutlineMail />
                        </div>
                        <span>info@elevate.com</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="/">
                        <div className={styles.icon}>
                          <FaLocationDot />
                        </div>
                        <span>
                          الدمام الخضريه
                          <br />
                          طريق الظهران الجبيل السريع 
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.box}>
                <h3 className={styles.fTitle}>منشورات شائعة</h3>
                <div className={styles.post}>
                  <div className={styles.image}>
                    <img src="/images/footer-post-1.png" alt="post-img" />
                  </div>
                  <div className={styles.postDetails}>
                    <div className={styles.time}>
                      <BsClock />
                      <span>15th April, 2022</span>
                    </div>
                    <a href="/" className={styles.postTitle}>
                    مهام تجديد المباني
                    </a>
                    <a href="/" className={styles.readMore}>
                      <span>اقرأ أكثر</span>
                      <FaArrowLeft  />
                    </a>
                  </div>
                </div>
                <div className={styles.post}>
                  <div className={styles.image}>
                    <img src="/images/footer-post-2.png" alt="post-img" />
                  </div>
                  <div className={styles.postDetails}>
                    <div className={styles.time}>
                      <BsClock />
                      <span>15th April, 2022</span>
                    </div>
                    <h4 className={styles.postTitle}>
                    مهام تجديد المباني
                    </h4>
                    <a href="/" className={styles.readMore}>
                      <span>اقرأ أكثر</span>
                      <FaArrowLeft  />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className={styles.copyRights}>
        <div className="mainContainer">
          <p>حقوق النشر 2024 مؤسسه الأسهل للمصاعد. كل الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
