import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 300, // values from 0 to 3000, with step 50ms
  easing: "ease-in", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route
          path="/"
          exact
          render={(props) => (
            <div className="container">
              <Intro />
              <About />
              <Experience />
              <br></br>
              <Projects />
            </div>
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
