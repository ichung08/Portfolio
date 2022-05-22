import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <br></br>
      <Project
        title="iris"
        github="https://github.com/ichung08/iris"
        website="irisapp.xyz"
        event="ETHGlobal's LFGrow Hackathon"
        desc="iris, the messenger of the gods, is a platform that welcomes the new age of social media. We combined features from Twitter, Twitch, Tik Tok, and Patreon into an app where you can livestream content, post content publicly, or privately, comment, reshare, and collect posts. We built iris using Lens Protocol, Lit Protocol and Livepeer with Javascript and React and deployed on Polgyon."
        tech="Lens Protocol,Lit Protocol,Livepeer,JavaScript,ReactJS,HTML,CSS,Firebase"
      />
      <br></br>
      <Project
        title="Tempra"
        github="https://github.com/ianmah/tempra"
        website="https://tempraaa.web.app/"
        event="ETHGlobal's ETHAmsterdam Hackathon"
        desc="Tempra is your all-in-one instant messaging platform on-chain. Inspired by Snapchat, upload ephemeral photos and videos, or private message your frens. Tempra brings the uniqueness of burnable and exclusive content to the convenience of composable identities on Lens Protocol. We combined Lens Protocol with Lit Protocol and Livepeer, and deployed it all on Polygon Mumbai."
        tech="Lens Protocol,Lit Protocol,Livepeer,JavaScript,ReactJS,HTML,CSS,Firebase"
      />
      <br></br>
      <Project
        title="Ambience"
        github="https://github.com/ichung08/ambience"
        event="Hack the North 2021"
        desc="Developed a music player that recommends music based on facial emotion and expression using JavaScript, ReactJS, and face-api. Integrated a journaling feature using Firebase, allowing users to journal their emotions."
        tech="JavaScript,ReactJS,HTML,CSS,Firebase"
      />
      <br></br>
      <Project
        title="Battle To-Do"
        github="https://github.com/ichung08/battle-todo"
        event="nwHacks 2021"
        desc="Developed a user authenticated to-do list game web app to encourage online productivity. Built login system, to-do list, and frontend web pages using Django, HTML and CSS. Achieved ‘Honourable Mention’ award amongst 200+ teams at nwHacks 2021."
        tech="Python,Django,HTML,CSS"
      />
      <br></br>
      <Project
        title="UBC Course Explorer"
        github="https://github.com/ichung08/ubc-course-explorer"
        website="https://ubc-course-app.herokuapp.com/"
        event="Oakhacks 2020"
        desc="Built a school course search web app with Python and Django, integrating a UBC Grades and RateMyProfessors API to display course, grades and professor information. Containerized and deployed using Docker and Heroku and implemented Python Linter with Github Actions. Designed and implemented frontend web pages using Django, HTML and CSS. Achieved first place amongst 40+ teams at Oakhacks 2020."
        tech="Python,Django,JavaScript,Heroku,Docker,Github Actions,HTML,CSS"
      />
      <br></br>
      <Project
        title="Modelling Meteorological Factors of COVID-19"
        github="https://github.com/ericlee0920/2021-Data-Science-Projects"
        event="Research Project"
        desc="Evaluated the significance of meterological factors on COVID-19 infection rates in various regions of Canada using linear regression, decision tree regression, and a random forest regressor in Python. Presented project at Multidisciplinary Undergraduate Research Conference (MURC)."
        tech="Python,scikit-learn,Django,MongoDB"
      />
      <br></br>
      <Project
        title="Restaurant List"
        github="https://github.com/ichung08/Restaurant-List-App"
        event="Independent Project"
        desc="Created an application to help users record and list restaurants utilizing OOP concepts. Developed desktop application in Java, with SwingUI GUI. Aquired 100% code coverage with JUnit."
        tech="Java,SwingUI,JUnit,JSON"
      />
      <br></br>
      <Project
        title="Personal Website"
        github="https://github.com/ichung08/personal-website"
        website="https://isaacchung.com"
        event="Independent Project"
        desc="The website you're currently on, designed and implemented using React, HTML, and CSS with a CI/CD pipeline using Github Actions."
        tech="JavaScript,React,HTML,CSS,Github Actions"
      />
    </div>
  );
};

export default Projects;
