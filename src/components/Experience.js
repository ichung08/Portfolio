import Post from "./Post";

const Experience = () => {
  return (
    <div id="experience">
      <h2>Experience</h2>
      <br></br>
      <Post
        title="Incoming Build Engineer Co-op @ Visier"
        date="Starting 09/2021 (8 months)"
        desc="Optimizing codebase compiling and testing through the build system. Improving processes around development efficiency and extending current CI/CD pipeline with Jenkins."
        tech="Python Java Groovy Scala Jenkins Docker Gradle"
      />
      <br></br>
      <Post
        title="Work Learn IT Support/Web Assistant @ UBC"
        date="06/2021 - Present"
        desc="Redesigned and restructed CPS and Biochemistry department webpages to improve overall appearance and SEO.  Managed website content, design and updates for CPS and Biochemistry department."
        tech="Wordpress"
      />
      <br></br>
      <Post
        title="nwHacks Logistics Coordinator @ nwPlus"
        date="06/2021 - Present"
        desc="Organized volunteer and organizer logistics, opening and closing ceremonies, food and snacks, and judging and registration. Crafted hacker experience with workshops, events and activities for 900+ hackers."
        tech=""
      />
      <br></br>
      <Post
        title="Undergraduate Computer Science Teaching Assistant @ UBC"
        date="10/2020 - 04/2021"
        desc="Taught an introductory programming course in Python, led labs with 25+ students, graded 600+ lab assignments, and hosted weekly office hours. Curated and edited 10+ tutorial videos as new course development materials for remote learning."
        tech="Python"
      />
    </div>
  );
};

export default Experience;
