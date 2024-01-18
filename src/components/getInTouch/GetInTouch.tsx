import MapComponent from "./MapComponent/MapComponent";
import styles from "./styles.module.css";

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <div className={styles.container}>
        <div className={styles.map}>
            <MapComponent />
        </div>
        <div className={styles.message}>
          <div className={styles.top}>
            <p className={styles.text}>إبقى على تواصل</p>
            <h2 className={styles.title}>دعونا الحصول على إتصال</h2>
          </div>
          <form className={styles.messageForm}>
            <input type="text" placeholder="الإسم بالكامل" />
            <input type="email" placeholder="البريد الإلكتروني" />
            <select className={styles.selectOption}>
                <option>حدد اختيارا</option>
                <option>الإختيار الأول</option>
                <option>الإختيار الثاني</option>
                <option>الإختيار الثالث</option>
                <option>الإختيار الراع</option>
            </select>
            <input type="date" placeholder="Select Date" />
            <select className={styles.selectTime}>
                <option>12:00AM</option>
                <option>12:30AM</option>
                <option>1:00AM</option>
            </select>
            <textarea placeholder="رسالتك" />
            <button className={styles.submitButton}>إرسال</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
