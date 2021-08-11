import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <Project
        title="UBC Course Explorer"
        github="https://github.com/ichung08/ubc-course-explorer"
        website="https://ubc-course-app.herokuapp.com/"
        event="Oakhacks 2020"
        desc="Built a school course search web app with Python and Django, integrating a UBC Grades and RateMyProfessors API to display course, grades and professor information. Containerized and deployed using Docker and Heroku and established CI/CD pipeline with Github Actions. Designed and implemented frontend web pages using Django, HTML and CSS. Achieved first place amongst 40+ teams at Oakhacks 2020."
        tech="Python, Django, JavaScript, Heroku, Docker, Github Actions, HTML, CSS"
      />
      <Project
        title="Restaurant List"
        github="https://github.com/ichung08/Restaurant-List-App"
        event="independent project"
        desc="Created an application to help users record and list restaurants utilizing OOP concepts. Developed desktop application in Java, with SwingUI GUI. Aquired 100% code coverage with JUnit."
        tech="Java, SwingUI, JUnit, JSON"
      />
      <Project
        title="Battle To-Do"
        github="https://github.com/ichung08/battle-todo"
        event="nwHacks 2021"
        desc="Developed a user authenticated to-do list game web app to encourage online productivity. Built login system, to-do list, and frontend web pages using Django, HTML and CSS. Achieved ‘Honourable Mention’ award amongst 200+ teams at nwHacks 2021."
        tech="Python, Django, HTML, CSS"
      />
      <Project
        title="Modelling Meteorological Factors of COVID-19"
        github="https://github.com/ericlee0920/2021-Data-Science-Projects"
        event="research project"
        desc="Evaluated the significance of meterological factors on COVID-19 infection rates in various regions of Canada using linear regression, decision tree regression, and a random forest regressor in Python. Presented project at Multidisciplinary Undergraduate Research Conference (MURC)."
        tech="Python, scikit-learn, Django, MongoDB"
      />
    </div>
  );
};

export default Projects;
