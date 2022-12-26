import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50em;
`

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

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

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`

const Link = styled.a`
  float: left;
  color: black;
  text-align: center;
  margin: 12px;
  text-decoration: none;
  font-size: 1.5em;
  line-height: 25px;
  cursor: pointer;
`


const About = () => {
  return (
    <Container>
      <AboutContainer>
        <Title>About Me</Title>
        <Body>
          I'm a student at the <b>University of British Columbia studying Cognitive Systems + CS</b>. This website is an
          overview of some of my experiences and thoughts.
        </Body>
        <Body>
          I started coding halfway through my first year in 2020, and I'm still navigating through the tech industry. 
          I'm currently interested in all things Web3, blockchain, cognitive systems, philosophy, startups, and venture capital.
        </Body>
        <Body>
          <b>When I'm not in front of a computer screen,</b> you'll find me playing sports 
          (volleyball, basketball, weightlifting, bouldering or ultimate frisbee), eating delicious food, 
          or spending time with family and friends.
        </Body>
        <LinkContainer>
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
        </LinkContainer>
      </AboutContainer>
    </Container>
  );
};

export default About;
