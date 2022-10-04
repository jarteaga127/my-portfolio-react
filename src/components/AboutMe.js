import styled from "styled-components";

import MyPicture from "../images/1572838455711-profile.jpeg";

const AboutMe001 = styled.section`
width: 100%;
max-width: 1920px;
padding-top: 64px;

@media screen and (max-width: 414px) {
    padding-bottom: 128px; 
}
`;

const AboutMe002 = styled.div`
display: flex;
margin-left: 142px;
margin-right: 142px;
margin-bottom: 128px;

@media screen and (max-width: 900px) {
display: block;
margin: 0 auto;
}
`;

const Text = styled.div`
width: 50%;
margin-right: 64px;


@media screen and (max-width: 900px) {
    padding: 32px;
    width: 100%;
    }
`;

const SecHead = styled.div`
font-size: 32px;
font-weight: bold;

@media screen and (max-width: 414px) {
    font-size: 24px;
}
`;

const Text001 = styled.div`
margin-top: 8px;

`;

const Picture = styled.div`
width: 50%;
@media screen and (max-width: 900px) {
    padding: 8px 16px;
    width: 100%;
    }
    ;
`;

const Picture002 = styled.img`
width: 100%;


@media screen and (max-width: 900px) {
    margin: 0 auto;
    width: 100%;
}
`;



export default function AboutMe() {
    return (
       <AboutMe001 id="AboutMe">
<AboutMe002>
<Text>
    <SecHead>About Me</SecHead>
    <Text001>I am originally from Los Angeles, California, United States (Pasadena, to be more exact.) I currently live in Toda, Saitama, Japan. Despite teaching English for about six years, I wish to work in a field where I can learn new skills and grow with experience. I love to draw things, and spend time coding stuff. These two hobbies are the reason why I am interested in being a web designer and web developer. Apart from that, I love to cook, take pictures, learn Japanese (I have passed N2), read books, listen to music, watch anime and travel.</Text001>
</Text>
<Picture>
    <Picture002 src={MyPicture}/>
</Picture>
</AboutMe002>
       </AboutMe001>
    )
}