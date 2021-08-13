const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <br></br>
      <p>
        I'm a student at the <b>University of British Columbia studying Cognitive Systems + CS</b>. This website is an
        overview of some of my experiences and thoughts.
      </p>
      <br></br>
      <p>
        I started coding halfway through my first year, and I'm still navigating through the tech industry. My future
        career is still unclear, but I hope to sample and gain a general understanding of the industry before
        specializing in the future.
      </p>
      <br></br>
      <p>
        <b>When I'm not in front of a computer screen,</b> I'm reading, working out at the gym, or spending time with
        family and friends.
      </p>
      <br></br>
      <p>
        Check out my{" "}
        <a href="static\Isaac_Chung_Resume.pdf" className="about__link" rel="noreferrer">
          resume
        </a>
        , read some of my{" "}
        <a href="#thoughts" className="about__link" rel="noreferrer">
          thoughts
        </a>
        , or follow me on{" "}
        <a
          href="https://open.spotify.com/user/sophieknowington?si=1721bf00ead043a8"
          className="about__link"
          rel="noreferrer"
          target="_blank"
        >
          Spotify
        </a>
        !
      </p>
      <br></br>
    </div>
  );
};

export default About;
