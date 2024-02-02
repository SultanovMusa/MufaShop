import { Routes,Route } from "react-router-dom"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"
const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout