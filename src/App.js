import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
