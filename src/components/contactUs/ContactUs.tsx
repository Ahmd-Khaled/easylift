import { Ri24HoursFill } from "react-icons/ri";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { GrMapLocation } from "react-icons/gr";

import styles from "./styles.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUs} id="contact">
        <div className={styles.container}>
            <div className={styles.box}>
                <Ri24HoursFill className={styles.icon} />
                <div className={styles.info}>
                    <p className={styles.text}>نحن متاحون من الاثنين إلى الجمعة</p>
                    <p className={styles.boldText}>
                        <span>7:00 ص</span>
                        <span>-</span>
                        <span>9:00 م</span>
                    </p>
                </div>
            </div>
            <div className={styles.box}>
                <LiaPhoneVolumeSolid className={styles.icon} />
                <div className={styles.info}>
                    <p className={styles.text}>لديك سؤال؟</p>
                    <a href="tel:+966 0556943009" className={styles.boldText}>0556943009</a>
                </div>
            </div>
            <div className={styles.box}>
                <GrMapLocation className={styles.icon} />
                <div className={styles.info}>
                    <p className={styles.text}>هل تحتاج إلى إصلاح؟ عنواننا</p>
                    <p className={styles.boldText}>الدمام  الخضريه طريق الظهران الجبيل السريع </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs