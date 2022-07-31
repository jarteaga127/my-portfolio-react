import styled from "styled-components";

const MyProjects001 = styled.section`
background-color: #5C618A;
padding-top: 64px;
padding-left: 32px;
padding-right: 32px;
width: 100%;
padding-bottom: 120px;
`;

const MyProjects002 = styled.div`
margin-left: auto;
margin-right: auto;
width: 100%;
`;

const SecHeader = styled.div`


h2 {
    font-size: 32px;
}

p {
    font-size: 24px;
}
`;

const ProjectCont = styled.div`
padding: 32px 32px 96px 32px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 42px;

@media screen and (max-width: 900px) {
    padding: 0;
    display: block;
    margin: 0 auto;
    gap: 42px;
    justify-content: space-evenly;
    }
`;

const ProjectWrapper = styled.div`
`;

const ProjectThumb = styled.div`
cursor: pointer;
background-color: #2f3247;
width: 375px;

@media screen and (max-width: 900px) {
    width: 100%;
    margin-bottom: 32px;
    }

`;

const ImgCont = styled.div`

`;

const ThumbImg = styled.img`
width: 375px;
filter: grayscale(100%);

&:hover {
    filter: grayscale(0%);
    transition: 0.3s;
}

@media screen and (max-width: 900px) {
    width: 100%;
    }

`;

const ProjectName = styled.div`
font-weight: bold;
font-size: 18px;
padding: 8px 16px;

&:hover {
    opacity: 0.7;
    text-decoration: underline;
}
`;


const SeeMore = styled.div`
cursor: pointer;
margin: 0 auto;
width: 33%;
background-color: #2f3247;
padding: 16px;
text-align: center;
color: #FFF;

&:hover {
    opacity: 0.7;
    text-decoration: underline;
}
`;


export default function MyProjects({projects}) {
    return (
<MyProjects001 id="MyProjects">
<SecHeader>
        <h2>My Projects</h2>
        <p>Here are some things that I have worked on. I have designed and developed web pages and apps.</p>
    </SecHeader>

<MyProjects002>
    
    <ProjectCont>
        {projects.map(({id, image, alt, title }) => (
        <ProjectWrapper>
            <ProjectThumb>
                <ImgCont>
                <ThumbImg src={image} alt={alt}/>
                </ImgCont>
                <ProjectName>{title}</ProjectName>
            
            </ProjectThumb>
        </ProjectWrapper>
))}
    </ProjectCont>
    <SeeMore>See More</SeeMore>
</MyProjects002>
</MyProjects001>
    )
}