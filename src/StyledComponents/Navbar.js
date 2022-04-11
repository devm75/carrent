import styled from 'styled-components';

export const NavContainer = styled.div`
width:100%;
max-width:1260px;
margin:auto;
display:flex;
justify-content:space-between;
/* padding: 0px 40px; */
height:30px;
margin-bottom:40px;

`
export const OuterLogoContainer = styled.div`
transform:translateY(-50px);
`;
export const NavLogoContainer = styled.p`
`;

export const NavLogoOrangeLetters = styled.span`
font-weight:bold;
font-size:50px;
color:#fc3903;
line-height:150%;
`

export const NavLogoBlackLetters = styled.span`
color:black;
font-size:25px;
line-height:130%;
font-weight:bold;
`


export const NavItemsContainer = styled.div`
display:flex;
justify-content:space-between;
gap:20px;

`
export const NavItem = styled.div`
  /* opacity:0.75; */
padding:6px;
font-size:16px;
font-weight:bold;
background-color:${props => props.type === "button" && '#fc3903' };

&:hover{
    cursor:pointer;
  opacity:1;
}
`