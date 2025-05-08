import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Albums from "./components/Albums"
import Upload from "./components/Upload"
import Explore from "./components/Explore"
import Favorites from "./components/Favorites"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="albums">
            <Albums />
          </section>
          <section id="upload">
            <Upload />
          </section>
          <section id="explore">
            <Explore />
          </section>
          <section id="favorites">
            <Favorites />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
