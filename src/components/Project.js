import { FaChevronDown, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useRef } from "react";
import "../styles/accordion.css";

const Project = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate");
  };

  const techArr = props.tech.split(" ");

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <h3 className="accordion__title">{props.title}</h3>
        <FaChevronDown className={`${setRotate}`} />
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <div className="accordion__date">{props.event}</div>
        <div className="accordion__text">{props.desc}</div>
        <br />
        {props.tech && (
          <div className="accordion__tech__container">
            {" "}
            {techArr.map(function (tech, i) {
              return (
                <span className="accordion__tech" key={i}>
                  {tech}
                </span>
              );
            })}
          </div>
        )}
        {props.github && <FaGithub href={props.github} />}
        {props.website && <FaExternalLinkAlt href={props.website} />}
      </div>
    </div>
  );
};

export default Project;
