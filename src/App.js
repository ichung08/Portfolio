import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
