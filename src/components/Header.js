import { BrowserRouter as Router } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
// import Thoughts from "./Thoughts";

const Header = () => {
  return (
    <Router>
      <header className="header">
        <a href="/" className="logo">
          ISAAC CHUNG
        </a>
        <div>
          <LinkScroll
            className="header__link"
            to="about"
            rel="noreferrer"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            About
          </LinkScroll>
          <LinkScroll
            className="header__link"
            to="experience"
            rel="noreferrer"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            Experience
          </LinkScroll>
          <LinkScroll
            className="header__link"
            to="projects"
            rel="noreferrer"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            Projects
          </LinkScroll>
          {/* <LinkScroll
            className="header__link"
            to="thoughts"
            rel="noreferrer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Link to={"/thoughts"} style={{ color: "inherit", textDecoration: "inherit" }}>
              Thoughts
            </Link>
          </LinkScroll> */}
        </div>
      </header>
      {/* <Route path="/thoughts" component={Thoughts} /> */}
    </Router>
  );
};

export default Header;
