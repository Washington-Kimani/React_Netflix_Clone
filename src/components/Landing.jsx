import React from "react";
import { styled } from "styled-components";
import { device } from '../device.js'
import HR from "./HR";
import Download from "./Download";

function Landing() {
  return (
    <>
      <Section className="container">
        <Top>
          <img src="/images/netflix-logo.svg" alt="netflix" />
          <Signin>Sign In</Signin>
        </Top>
        <Container>
          <Content>
            <ContentText>
              <h1>Unlimited movies, TV shows, and more</h1>
              <p>Watch anywhere. Cancel anytime.</p>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </ContentText>
            <Input>
              <input type="email" name="email" id="email" placeholder="Email address" />
              <button>
                Get Started
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="default-ltr-cache-4z3qvp e1svuwfo1" dataName="ChevronRight" aria-hidden="true"><path fillRule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
                </span>
              </button>
            </Input>
          </Content>
        </Container>
      </Section>
      <HR />
      <Watch>
        <Row1>
          <div>
            <h1>Enjoy on your TV</h1>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              <br /> Blue-ray Plyers, and more
            </p>
          </div>
        </Row1>
        <Row2>
          <TV>
            <img src="/images/tv.png" alt="" />
            <div>
              <video data-uia="nmhp-card-animation-asset-video" autoPlay playsInline muted loop><source src="/images/neflix_somevideo.m4v" type="video/mp4" /></video>
            </div>
          </TV>
        </Row2>
      </Watch>
      <HR />
      <Download/>
      <HR/>
    </>
  );
}

const Section = styled.section`
  height: 100vh;
  width: 100%;
  color: var(--color-white);
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(/images/netflix_background.jpg);
  background-size: cover;
  background-position: center;

  @media ${device.laptopL} {
    max-width: 1024px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

const Top = styled.div`
  width: 100%;
  padding: 1rem 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  img {
    width: 150px;
  }
`;

const Signin = styled.button`
  padding: 0.7rem 1.2rem;
  background: var(--secondary-color);
  color: var(--color-white);
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentText = styled.article`
  text-align: center;
  margin-bottom: 30px;
  line-height: 40px;

  h1 {
    margin-bottom: 20px;
    font-size: 3rem;
    font-weight: 900;

    @media screen and (max-width: 960px){
      margin: 0;
      font-size: 2rem;
      font-weight: 700;
  }

  p {
    margin-top: 8px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Input = styled.section`
  width: 100;
  display: flex;
  justify-content: center;

  input {
    width: 40%;
    padding: 0.7rem 1.2rem;
    margin-right: 10px;
    background: rgba(22, 22, 22, 0.7);
    border: 2.5px solid rgba(128, 128, 128, 0.7);
    border-radius: 5px;

    &::placeholder {
      font-family: Avenir-Roman, sans-serif;
      font-size: 20px;
      color: var(--color-white-light);
    }
  }

  button {
    display: flex;
    padding: 0.7rem 1.2rem;
    color: #f9f9f9;
    background: var(--secondary-color);
    font-size: 20px;
    border-radius: 5px;

    span {
      height: 100%;
      display: flex;
      align-items: center;

      svg {
        width: 1.5rem;
        height: inherit;
        margin-left: 0.5rem;
        margin-right: 0rem;
      }
    }
  }

  @media screen and (max-width: 500px){
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    input{
      width: 70%;
    }
  }
`;

const Watch = styled.section`
  width: 100%;
  height: fit-content;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const Row1 = styled.section`
  width: 100%;
  height: fit-content;
  margin: auto 3rem;
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: flex-start;
  line-height: 40px;

  h1 {
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 900;
  }

  p {
    margin-top: 8px;
    font-size: 20px;
    font-weight: 500;
  }
`;
const Row2 = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TV = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 65%;
    margin: auto;
    margin-bottom: 30px;
    z-index: 3;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 40%;

    video{
      width: 120%;
      margin-bottom: 15%
    }
  }
`;

export default Landing;
