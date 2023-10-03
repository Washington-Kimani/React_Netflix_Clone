import React from "react";
import { styled } from "styled-components";
import { device } from '../device'

const Download = (props) => {
  return (
    <Main>
      <Row1>
        <div>
          <h1>Download your shows to watch offline</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </Row1>
      <Row2>
        <Phone>
          <img src="/images/mobile-0819.jpg" alt="" />
        </Phone>
        <Downloading>
          <Contain>
            <div>
              <img src="/images/boxshot.png" alt="BoxShot" />
            </div>
            <article>
              <h3>Stranger Things</h3>
              <p>Downloading...</p>
            </article>
            <IMG src="/images/download-icon.gif" alt="Downloading" />
          </Contain>
        </Downloading>
      </Row2>
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  height: fit-content;
  padding: 2rem;
  gap: 2rem;

  @media screen and ${device.laptop} and (max-width: 1024px) {
    flex-direction: row;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }
  @media ${device.mobileM} {
    flex-direction: column;
  }
  @media ${device.mobileS} {
    flex-direction: column;
  }
`;
const Row1 = styled.section`
  width: 100%;
  height: fit-content;
  margin: auto 2rem;
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: flex-start;
  line-height: 40px;

  div {
    width: 100%;

    h1 {
      width: 100%;
      margin-bottom: 20px;
      font-size: 50px;
      font-weight: 900;
    }

    p {
      margin-top: 8px;
      font-size: 20px;
      font-weight: 500;
    }
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

const Phone = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 65%;
    margin: auto;
    margin-bottom: 30px;
    z-index: 1;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 40%;

    video {
      width: 120%;
      margin-bottom: 15%;
    }
  }
`;

const Downloading = styled.div`
  position: reative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  }
`;

const Contain = styled.div`
  overflow: hidden;
  position: absolute;
  left: 50%;
  bottom: 12%;
  transform: translateX(-50%);
  margin: 0 auto;
  background: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  width: 40%;
  min-width: 15rem;
  padding: 0.25rem 0.65rem;
  border: 2px solid rgba(128, 128, 128, 0.7);
  box-shadow: 0 0 2em 0 rgb(0, 0, 0);
  border-radius: 0.75rem;

  div {
    margin: 0 1rem 0 0;
    flex-grow: 0;
    flex-shrink: 0;
    img {
      height: 4rem;
    }
  }

  article {
    text-align: left;
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0.3rem 0;

    p {
      color: #306cec;
    }
  }
`;

const IMG = styled.img`
  width: 3rem;
  height: 3rem;
  outline: 2px solid rgb(0, 0, 0);
  outline-offset: -2px;
  display: block;
  content: "";
  flex-grow: 0;
  flex-shrink: 0;
`;

export default Download;
