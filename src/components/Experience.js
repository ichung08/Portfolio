import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

const Wrapper = styled.div`
padding: 18px;
align-items: center;
border: none;
outline: none;
`

const JobTitle = styled.h2`
    font-size: 1.5em;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    text-align: left;
    vertical-align: middle;
`

const Date = styled.p`
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: italic;
`

const Desc = styled.p`
    font-family: "Lato", sans-serif;
    font-weight: 400;
`

const Tech = styled.span`
    font-family: "Share Tech", sans-serif;
    font-weight: 400;
    color: rgb(255, 255, 255);
    padding: 5px;
    background-color: #2d67ae;
    margin-right: 5px;
    border-radius: 2px;
`

const Experience = ({title, date, desc, tech, website, website2}) => {

    const techArr = tech.split(",");

    return (
        <Wrapper>
            <JobTitle>{title}</JobTitle>
            <Date>{date}</Date>
            <Desc>{desc}</Desc>
            {tech && (
                <div>
                    {" "}
                    {techArr.map(function (tech, i) {
                    return (
                        <Tech key={i}>
                        {tech}
                        </Tech>
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
        </Wrapper>
    );
}

export default Experience;