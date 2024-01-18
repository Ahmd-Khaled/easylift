import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import banner01 from "../../assets/bg-image-1.jpg"
import banner02 from "../../assets/bg-image-2.jpg"
import banner03 from "../../assets/bg-image-3.jpg"
import styles from "./banner.module.css"
import { BiSolidPhoneCall } from "react-icons/bi"

const images = [
  {
    image: banner01,
    title: "نرحب بك في إيزي",

    interval: 1500,
  },
  {
    image: banner02,
    title: "نرحب بك في إيزي",
    interval: 500,
  },
  {
    image: banner03,
    title: "نرحب بك في إيزي",
    interval: 2500,
  },
]

const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      id="home"
    >
      {images.map((item, index) => (
        <SwiperSlide key={index} className={styles["bannerSlide"]}>
          <div className={styles["slideContent"]}>
            <img
              className={styles.bannerImage}
              src={item.image}
              alt={item.title}
            />
            <div className={styles["heading"]}>
              <h5>{item.title}</h5>
              <h2>
                صيانه وأعطال جميع أنواع المصاعد
                <br />
                عقود سنوي ونصف سنوي
                <br />
                وزيارات قطع الغيار الإيطالي والتركي
              </h2>

              <div className={styles.contact}>
                <a href="#" className={styles.btn}>
                البدء
                </a>

                <div className={styles.singleComponent}>
                  <BiSolidPhoneCall className={styles.icon} />
                  <div className={styles.info}>
                    <span>إتصل بنا الآن</span>
                    <a href="tel:+966 0556943009">0556943009</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner
