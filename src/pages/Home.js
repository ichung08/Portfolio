import styled, { keyframes } from "styled-components";

const IntroContainer = styled.div`
  margin: 13rem 0 13rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 19.5rem 1rem 19.5rem;
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

const Title = styled.h1`
  font-size: 2.5em;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: left;
  width: 80%;
`

const Body = styled.body`
  font-size: 1.5em;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: left;
  width: 80%;
`

const waveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  } 
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
`

const Wave = styled.span`
  animation-name: ${waveAnimation}; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
`

const Home = () => {
  return (
    // <IntroContainer data-aos="zoom-in" data-aos-offset="10" data-aos-duration="400">
    <IntroContainer>
      <Title>
        Hey, I'm <b>Isaac Chung</b> <Wave>👋</Wave>
      </Title>
      <Body>
        I'm a software engineer, passionate about combining tech and communities. 
        <br/>
        I'm currently a student at the <b>University of British Columbia studying Cognitive Systems + CS</b>.
      </Body>
      <LinkContainer>
        <Link href="/about">About</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/projects">Projects</Link>
      </LinkContainer>
      
    </IntroContainer>
  );
};

export default Home;
