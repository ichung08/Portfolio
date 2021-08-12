import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <About />
        <Experience />
        <Projects />
        <Accordion
          title="Build Engineer Co-op @ Visier"
          content="<p>Optimizing codebase compiling and testing through the build system. Improving processes around development efficiency and extending current CI/CD pipeline with Jenkins.</p>"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
