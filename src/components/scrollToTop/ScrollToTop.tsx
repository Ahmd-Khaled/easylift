import { SlArrowUp } from "react-icons/sl";
import { FaArrowUp } from "react-icons/fa";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showScrollToTopBTN, setShowScrollToTopBTN] = useState(false);
  const [percentVal, setPercentVal] = useState(0)

  const calcScrollValue = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);
    setPercentVal(scrollValue);
    // console.log("scrollValue: ", scrollValue)
  }
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  
  // const percentVal = Math.round((Math.floor(pos) * 100) / calcHeight);
  // const pos = window.scrollY;

  // console.log("document.body.clientHeight :", document.body.clientHeight);
  // console.log("document.documentElement.clientHeight :", document.documentElement.clientHeight);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScrollToTopBTN(true);
      } else {
        setShowScrollToTopBTN(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // console.log("pos: ", pos);
  // console.log("calcHeight: ", calcHeight);
  // console.log("percentVal: ", percentVal);

  return (
    <div
      onClick={scrollUp}
      className={
        showScrollToTopBTN ? styles.scrollToTop : styles.scrollToTopHidden
      }
      style={{background: `conic-gradient(#5187C3 ${percentVal}%, white ${percentVal}%)`}}
    >
      <div className={styles.inner}>
        <FaArrowUp className={styles.icon} />
      </div>
    </div>
  );
};

export default ScrollToTop;
