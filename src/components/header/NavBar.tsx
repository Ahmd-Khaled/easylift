import { Col, Container, NavLink, Row } from "react-bootstrap"
import { MdElectricBolt } from "react-icons/md"
import { MdOutlineEmail } from "react-icons/md"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { GoArrowUpLeft } from "react-icons/go"

import { FaSearch } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import logo from "../../assets/easy-logo-transparent.png"
import { useEffect, useRef, useState } from "react"
import { FiMenu } from "react-icons/fi"
import SideBar from "../sideBar/SideBar"

const nav_Links = [
  {
    path: "#",
    display: "مسارات مهنية",
  },
  {
    path: "#",
    display: "الأخبار ووسائل الإعلام",
  },
  {
    path: "#",
    display: "اتصل بنا",
  },
]

export const links = [
  { id: "#home", display: "الرئيسية" },
  { id: "#pages", display: "صفحات" },
  { id: "#service", display: "خدمات" },
  { id: "#about", display: "حول" },
  { id: "#portfolio", display: "الأعمال " },
  { id: "#blog", display: "مدونة" },
  { id: "#contact", display: "اتصل بنا" },
]

const navBar = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number>()
  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const handleLinkClick = (index: number) => {
    setActiveIndex(index)
    setSideBarOpen(false)
  }

  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen)
  }

  useEffect(() => {
    const stickyFunc = () => {
      if (headerRef.current !== null)
        if (
          document.body.scrollTop > 180 ||
          document.documentElement.scrollTop > 180
        ) {
          headerRef.current.classList.add(styles.sticky)
        } else {
          headerRef.current.classList.remove(styles.sticky)
        }
    }

    window.addEventListener("scroll", stickyFunc)
    return () => {
      window.removeEventListener("scroll", stickyFunc)
    }
  })
  return (
    <>
      <header className={styles["header-one"]}>
        <div className={styles["header-top"]}>
          <Container>
            <Row>
              <Col lg="12">
                <div className={styles["header-top-wrapper"]}>
                  <div className={styles["left"]}>
                    <p>توصيل سريع وإرجاع مجاني في غضون 24 ساعة</p>
                    <div className={styles["icon"]}>
                      <MdElectricBolt
                        color="#5187C3"
                        size="20px"
                        className="ms-3"
                      />
                    </div>
                  </div>
                  <div className={styles["right"]}>
                    <ul className={styles["menu"]}>
                      {nav_Links.map((item, index) => (
                        <li className="nav-item" key={index}>
                          {item.display}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="header-mid">
          <Container>
            <Row>
              <Col lg="12">
                <div className={styles["header-mid-one-wrapper"]}>
                  <div className={styles["logo-area"]}>
                    <Link to="">
                      <img src={logo} alt=""/>
                    </Link>
                  </div>

                  <div className={styles["header-right"]}>
                    <div className={styles["single-component"]}>
                      <IoLocationOutline className={styles["icon-svg"]} />

                      <div className={styles["info"]}>
                        <span>أرسل لنا رسالة</span>
                        <a href="#">
                          الدمام الخضريه طريق الظهران الجبيل السريع
                        </a>
                      </div>
                    </div>

                    <div className={styles["single-component"]}>
                      <MdOutlineEmail className={styles["icon-svg"]} />

                      <div className={styles["info"]}>
                        <span>أرسل لنا بريدا</span>
                        <a href="#">elevate.cons@gmail</a>
                      </div>
                    </div>

                    <div className={styles["get-info"]}>
                      <a href="#" className={styles["btn"]}>
                        احصل على عرض أسعار
                        <GoArrowUpLeft className={styles["icons"]} />
                      </a>

                      <div className={styles.menuArea} onClick={toggleSideBar}>
                        <FiMenu className={styles.menuAreaIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles["header-sticky"]} ref={headerRef}>
          <Container>
            <Row>
              <Col lg="12">
                <div className={styles["nav-header"]}>
                  <div className={styles["clip-path"]}></div>
                  <div className={styles["wrapper"]}>
                    <div className={styles["main-nav"]}>
                      <nav>
                        <ul>
                          {links.map((item, index) => (
                            <li
                              className={styles["menu-item current"]}
                              key={index}
                            >
                              <NavLink
                                href={item.id}
                                className={`${styles["nav-item"]} ${
                                  index === activeIndex ? styles["active"] : ""
                                }`}
                                onClick={() => handleLinkClick(index)}
                              >
                                {item.display}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <SideBar isOpen={isSideBarOpen} />
    </>
  )
}

export default navBar
