import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>
      <p>CREATED BY ISAAC CHUNG &copy; 2021</p>
      <a href="https://twitter.com/isaackcchung" rel="noreferrer" target="_blank">
        <FaTwitter className="footer-icon" />
      </a>
      <a href="https://github.com/ichung08" rel="noreferrer" target="_blank">
        <FaGithub className="footer-icon" />
      </a>
      <a href="https://www.linkedin.com/in/isaac-chung-08/" rel="noreferrer" target="_blank">
        <FaLinkedin className="footer-icon" />
      </a>
      <a href="mailto:isaackcchung8@gmail.com" rel="noreferrer" target="_blank">
        <HiMail className="footer-icon" />
      </a>
    </footer>
  );
};

export default Footer;
