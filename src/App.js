import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
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
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Home />
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Experience} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
