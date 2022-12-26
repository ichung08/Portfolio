import styled from "styled-components";
import Experience from "../components/Experience";
import { Container, ChildContainer } from "../components/Container";
import { Link, LinkContainer } from "../components/Link";

const Title = styled.h1`
  font-size: 2.5em;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  width: 50%;
`

const Body = styled.p`
  font-family: "Lato", sans-serif;
  width: 50%;
  font-size: 1.4em;
`

const Resume = () => {
  return (
    <Container>
      <ChildContainer>
      <Title>Resume</Title>
      <Experience
        title="Software Engineer Intern @ Tesla"
        website="https://www.tesla.com/"
        date="05/2022 - Present"
        desc="Joining Tesla's web traffic infrastructure team and developing internal tools."
        tech="Javascript,Python,React"
      />
      <Experience
        title="Build Engineer Co-op @ Visier"
        website="https://www.visier.com/"
        date="09/2021 - 04/2022"
        desc="Optimizing codebase compiling and testing through the build system with Java and Scala. Improving processes around development efficiency and extending the current CI pipeline with Jenkins, Groovy, and Bash scripts. Utilized Slack and Bitbucket API to redesign a notification plugin to more effectively assist 
        developers, improving efficiency by 15%. Managed development build health in Jenkins, notifying developers regarding broken builds, reverting changes and assigning bugs. Created a Bash script to analyze 150+ repositories and detect for log4j and other security vulnerabilities."
        tech="Java,Groovy,Scala,Jenkins,Docker,Bash,Linux,Bitbucket,Jira"
      />
      <Experience
        title="Work Learn IT Support/Web Assistant @ The University of British Columbia"
        website="https://cps.med.ubc.ca/"
        website2="https://biochem.ubc.ca/?login"
        date="06/2021 - 08/2021"
        desc="Redesigned and restructed CPS and Biochemistry department webpages to improve overall appearance and SEO.  Managed website content, design and updates for CPS and Biochemistry department. Documented and taught WordPress workflow and standard of procedure to colleagues."
        tech="WordPress,HTML,CSS"
      />
      <Experience
        title="nwHacks Logistics Coordinator @ nwPlus"
        website="https://www.nwhacks.io/"
        date="06/2021 - Present"
        desc="Organized volunteer and organizer logistics, opening and closing ceremonies, food and snacks, and judging and registration. Crafted hacker experience with workshops, events and activities for 900+ hackers."
        tech=""
      />
      <Experience
        title="Undergraduate Computer Science Teaching Assistant @ The University of British Columbia"
        date="10/2020 - 04/2021"
        desc="Taught an introductory programming course in Python, led labs with 25+ students, graded 600+ lab assignments, and hosted weekly office hours. Curated and edited 10+ tutorial videos as new course development materials for remote learning."
        tech="Python,Camtasia"
      />
      </ChildContainer>
    </Container>
  );
};

export default Resume;
