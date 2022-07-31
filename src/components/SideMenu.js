import styled from "styled-components";

const SideMain = styled.div`
position: fixed;
  color: white;
  background-color: rgba(0, 0, 0, 0.68);
  z-index: 999;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: block;
  transition: 0.3 ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const CloseMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const CloseBtn = styled.button`
padding-top: 2rem;
  font-size: 24px;
border: none;
background-color: transparent;
cursor: pointer;

&:hover {
    opacity: 0.7;
}
`;

const Wrapper = styled.div``;

const Menu = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
list-style: none;
font-size: 24px;
`;

const LinkContainer = styled.li`

padding: 8px 16px;

a {
    text-decoration: none;

    &:hover {
        opacity: 0.7;
    }
}
`;

export default function SideMenu({isOpen, toggle}) {
    return(
<SideMain isOpen={isOpen} onClick={toggle}>
<CloseMenu>
    <CloseBtn onClick={toggle}>
    <i class="fas fa-times"></i>
    </CloseBtn>
</CloseMenu>
<Wrapper>
    <Menu>
        <LinkContainer>
        <a href="#AboutMe">About Me</a>
        </LinkContainer>
        <LinkContainer>
        <a href="#MyProjects">My Projects</a>
        </LinkContainer>
        <LinkContainer>
        <a href="#ContactMe">Contact Me</a>
        </LinkContainer>
    </Menu>
</Wrapper>
</SideMain>
    )
}