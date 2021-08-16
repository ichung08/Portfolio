import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        ISAAC CHUNG
      </Link>
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
        <Link to="/thoughts" className="header__link" style={{ color: "inherit", textDecoration: "none" }}>
          Thoughts
        </Link>
      </div>
    </header>
  );
};

export default Header;
