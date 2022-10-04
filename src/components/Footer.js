import styled from "styled-components";

const FooterMain = styled.section`
height: 94px;
background-color: #5C618A;
display: flex;
justify-content: center;
text-align: center;
align-items: center;


`;

const FooterIn = styled.div``;

export default function Footer() {
    return(
<FooterMain>
    <FooterIn>
        Created by Joseph Arteaga 2022
    </FooterIn>
</FooterMain>
    )
}