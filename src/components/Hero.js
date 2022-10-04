import styled from "styled-components";
import HeroBackgrouond from "../images/DSC00971.JPG";

const HeroSec = styled.section`
  width: 100%;
  height: 100vh;
  left: 0;
  right: 0;
  position: relative;
  overflow: hidden;
  z-index: 10;
`

const HeroImg = styled.div`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const HeroImg001 = styled.img`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroText = styled.div`
margin-top: 12rem;
color: white;
  z-index: 10;
  text-align: center;

  @media screen and (max-width: 414px) {
    padding: 8px 16px;
  }

  h1 {
    font-family: "Righteous";
    font-size: 64px;

    @media screen and (max-width: 414px) {
      font-size: 32px;
      margin-bottom: 16px;
    }

    h2 {
      @media screen and (max-width: 414px) {
        font-size: 24px;
      }
    }

`;

export default function HeroSection() {
    return (
<HeroSec>
    
    <HeroImg>
        <HeroImg001 src={HeroBackgrouond}/>
        <HeroText>
            <h1>Hello, my name is Joseph Arteaga</h1>
            <h2>I am aspiring to be a designer and front-end web developer in Japan.</h2>
        </HeroText>
    </HeroImg>
    
</HeroSec>
    )
}