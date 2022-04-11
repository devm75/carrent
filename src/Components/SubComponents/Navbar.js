import React from "react";
import {
  NavContainer,
  OuterLogoContainer,
  NavLogoOrangeLetters,
  NavLogoBlackLetters,
  NavItemsContainer,
    NavLogoContainer,
  NavItem
} from "../../StyledComponents/Navbar";

export const Navbar = () => {
    return <NavContainer>
        <OuterLogoContainer>
        <NavLogoContainer>
            <NavLogoOrangeLetters>CAR</NavLogoOrangeLetters>
            <NavLogoBlackLetters>ENT</NavLogoBlackLetters>

            </NavLogoContainer>
        </OuterLogoContainer>
        <NavItemsContainer>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Vehicle Models</NavItem>
            <NavItem>Testimonials</NavItem>
            <NavItem>Team</NavItem>
            <NavItem>Contact</NavItem>
            <NavItem type="button">SIGN UP</NavItem>
        </NavItemsContainer>
  </NavContainer>;
};
