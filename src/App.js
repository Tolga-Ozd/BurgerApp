import { Route, Router, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Menu from "./components/Menu"
import About from "./components/About"
import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/menü" element={ <Menu />} />
        <Route path="/hakkımızda" element={ <About />} />
        <Route path="/iletişim" element={ <Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
