import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45em;
`

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
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

const Title = styled.h1`
  font-size: 2.5em;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
`

const Home = () => {
  return (
    // <IntroContainer data-aos="zoom-in" data-aos-offset="10" data-aos-duration="400">
    <Container>
      <IntroContainer>
        <Title>
          Hey, I'm <b>Isaac Chung</b>
        </Title>
        <LinkContainer>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
        </LinkContainer>
      </IntroContainer>
    </Container>
  );
};

export default Home;
