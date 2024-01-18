import NavBar from "../header/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import '../../App.css'
import ScrollToTop from "../scrollToTop/ScrollToTop"
const Layout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
        <ScrollToTop />
      </div>
      <Footer />
    </>
  )
}

export default Layout
