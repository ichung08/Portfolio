import Post from "./Post";

const Experience = () => {
  return (
    <div id="experience" data-aos="fade-up">
      <h2>Experience</h2>
      <br></br>
      <Post
        title="Build Engineer Co-op @ Visier"
        website="https://www.visier.com/"
        date="09/2021 - Present"
        desc="Optimizing codebase compiling and testing through the build system with Java and Scala.Improving processes around development efficiency and extending the current CI pipeline with Jenkins and Groovy.Redesigned a Slack, Bitbucket and Jira notification plugin to more effectively assist developers, improving efficiency by 15%. Managed development build health in Jenkins, notifying developers regarding broken builds, reverting changes and assigning bugs to responsible developers."
        tech="Java,Groovy,Scala,Jenkins,Docker,Bash,Linux,Bitbucket,Jira"
      />
      <br></br>
      <Post
        title="Work Learn IT Support/Web Assistant @ The University of British Columbia"
        website="https://cps.med.ubc.ca/"
        website2="https://biochem.ubc.ca/?login"
        date="06/2021 - 08/2021"
        desc="Redesigned and restructed CPS and Biochemistry department webpages to improve overall appearance and SEO.  Managed website content, design and updates for CPS and Biochemistry department. Documented and taught WordPress workflow and standard of procedure to colleagues."
        tech="WordPress,HTML,CSS"
      />
      <br></br>
      <Post
        title="nwHacks Logistics Coordinator @ nwPlus"
        website="https://www.nwhacks.io/"
        date="06/2021 - Present"
        desc="Organized volunteer and organizer logistics, opening and closing ceremonies, food and snacks, and judging and registration. Crafted hacker experience with workshops, events and activities for 900+ hackers."
        tech=""
      />
      <br></br>
      <Post
        title="Undergraduate Computer Science Teaching Assistant @ The University of British Columbia"
        date="10/2020 - 04/2021"
        desc="Taught an introductory programming course in Python, led labs with 25+ students, graded 600+ lab assignments, and hosted weekly office hours. Curated and edited 10+ tutorial videos as new course development materials for remote learning."
        tech="Python,Camtasia"
      />
    </div>
  );
};

export default Experience;
