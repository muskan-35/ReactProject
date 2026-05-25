import Navbar from "./Components/Common/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Placements from "./Pages/Placements"
import Footer from "./Components/Common/Footer"

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/placements" element={<Placements />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
