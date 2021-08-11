import Header from "./components/Header";
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
    </div>
  );
}

export default App;
