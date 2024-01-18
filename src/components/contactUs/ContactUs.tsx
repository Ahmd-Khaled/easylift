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
                    <p className={styles.text}>WE ARE OPEN MONDAY-FRIDAY</p>
                    <p className={styles.boldText}>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className={styles.box}>
                <LiaPhoneVolumeSolid className={styles.icon} />
                <div className={styles.info}>
                    <p className={styles.text}>HAVE A QUESTION?</p>
                    <a href="/" className={styles.boldText}>+2546 214 21536</a>
                </div>
            </div>
            <div className={styles.box}>
                <GrMapLocation className={styles.icon} />
                <div className={styles.info}>
                    <p className={styles.text}>NEED A REPAIR? OUR ADDRESS</p>
                    <p className={styles.boldText}>Liza Street, NewYork</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs