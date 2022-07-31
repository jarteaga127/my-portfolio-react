import styled from "styled-components";
import Joseph001 from "../images/1572838455711-profile.jpeg";

const NavMain = styled.nav`
display: flex;
height: 64px;
width: 100%;
background-color: #151620;
z-index: 100;
position: fixed;
align-items: center;
justify-content: space-between;
padding-left: 16px;
padding-right: 16px;
color: white;
`;

const Nav1 = styled.div`
display: flex;
align-items: center;
`;

const MyIcon = styled.div`
height: 42px;
width: 42px;
`;

const MyIconImg = styled.img`
height: 100%;
width: 100%;
border-radius: 50%;
`;

const MyLogo = styled.div`
margin-left: 8px;
font-family: Righteous;
font-size: 24px;
`;

const Nav2 = styled.div``;

const MenuBtn = styled.button`
cursor: pointer;
color: white;
height: 42px;
width: 42px;
font-size: 18px;
border-radius: 50%;
background-color: transparent;
border: none;

&:hover {
    opacity: 0.7;
  }
`;

export default function NavBar({toggle}) {
    return (
<NavMain>
    <Nav1>
        <MyIcon>
<MyIconImg src={Joseph001}/>
        </MyIcon>
        <MyLogo>Joseph Arteaga</MyLogo>
        </Nav1>
    <Nav2>
        <MenuBtn onClick={toggle}>
        <i class="fa fa-bars"></i>
        </MenuBtn>
    </Nav2>
</NavMain>
)
}