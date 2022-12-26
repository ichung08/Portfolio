import styled from "styled-components";
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";

const Experience = ({title, date, description, tech, website, website2}) => {

    const techArr = tech.split(",");

    return (
        <div>
            <h2>{title}</h2>
            <div>{date}</div>
            <div>{description}</div>
            {tech && (
                <div>
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
            {website && (
                <a href={website} rel="noreferrer" target="_blank">
                <FaExternalLinkAlt className="accordion__links" />
                </a>
            )}
            {website2 && (
                <a href={website2} rel="noreferrer" target="_blank">
                <FaExternalLinkAlt className="accordion__links" />
                </a>
            )}
        </div>
    );
}

export default Experience;