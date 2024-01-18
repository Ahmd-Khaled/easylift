import { FaArrowRight } from "react-icons/fa6";

import styles from "./styles.module.css";
import { FaArrowLeft } from "react-icons/fa";

const Blog = () => {
  return (
    <div className={styles.blog} id="blog">
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.smTitle}>أحدث مدونة</p>
          <h2 className={styles.title}>أحدث رؤى المدونة</h2>
        </div>
        <ul className={styles.blogList}>
          <li className={styles.blogItem}>
            <div className={styles.image}>
              <img src="/images/blog-01.jpg" alt="blog" />
              <span className={styles.note}>مصاعد</span>
            </div>
            <div className={styles.content}>
              <div className={styles.byDate}>
                <p className={styles.by}>By david Smith</p>
                <p className={styles.date}>03 January, 2023</p>
              </div>
              <h3 className={styles.itemTitle}>
              أفضل الحلول لأكبر مباني المنازل السلبية في العالم
              </h3>
              <a href="/" className={styles.readDetailsBtn}>
                <span>إقرأ التفاصيل</span>
                <FaArrowLeft className={styles.icon} />
              </a>
            </div>
          </li>
          <li className={styles.blogItem}>
            <div className={styles.image}>
              <img src="/images/blog-02.jpg" alt="blog" />
              <span className={styles.note}>مصاعد</span>
            </div>
            <div className={styles.content}>
              <div className={styles.byDate}>
                <p className={styles.by}>By david Smith</p>
                <p className={styles.date}>03 January, 2023</p>
              </div>
              <h3 className={styles.itemTitle}>
              أحد أكبر حلول مباني المنازل السلبية في العالم
              </h3>
              <a href="/" className={styles.readDetailsBtn}>
                <span>إقرأ التفاصيل</span>
                <FaArrowLeft className={styles.icon} />
              </a>
            </div>
          </li>
          <li className={styles.blogItem}>
            <div className={styles.image}>
              <img src="/images/blog-03.jpg" alt="blog" />
              <span className={styles.note}>مصاعد</span>
            </div>
            <div className={styles.content}>
              <div className={styles.byDate}>
                <p className={styles.by}>By david Smith</p>
                <p className={styles.date}>03 January, 2023</p>
              </div>
              <h3 className={styles.itemTitle}>
              الميزة الرئيسية هي أكبر حل لحلول المباني المنزلية السلبية
              </h3>
              <a href="/" className={styles.readDetailsBtn}>
                <span>إقرأ التفاصيل</span>
                <FaArrowLeft className={styles.icon} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
