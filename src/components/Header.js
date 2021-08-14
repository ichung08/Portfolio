import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        ISAAC CHUNG
      </a>
      <div>
        <Link
          className="header__link"
          to="about"
          rel="noreferrer"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          About
        </Link>
        <Link
          className="header__link"
          to="experience"
          rel="noreferrer"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Experience
        </Link>
        <Link
          className="header__link"
          to="projects"
          rel="noreferrer"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="header__link"
          to="thoughts"
          rel="noreferrer"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Thoughts
        </Link>
      </div>
    </header>
  );
};

export default Header;
