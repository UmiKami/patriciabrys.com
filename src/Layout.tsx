import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Typography from "./views/Typography"
import Keepings from "./views/Keepings"
import UntoldStories from "./views/UntoldStories"
import About from "./views/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (<div className="">

    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/keepings" element={<Keepings />} />
        <Route path="/untold-stories" element={<UntoldStories />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  )
}

export default App
