import styled, { keyframes } from "styled-components";
import { Container, ChildContainer } from "../components/Container";
import { Link, LinkContainer } from "../components/Link";

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
      <ChildContainer>
        <Title>
          Hey, I'm <b>Isaac Chung</b>
        </Title>
        <LinkContainer>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/projects">Projects</Link>
        </LinkContainer>
      </ChildContainer>
    </Container>
  );
};

export default Home;
