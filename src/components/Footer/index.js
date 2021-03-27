import React from 'react'
import {
        FooterContainer,
        FooterWrap,
        FooterLinkWrap,
        FooterLinks,
        FooterLinkTitle,
        FooterLinkItems,
        FLinks,
        SocialIcons,
        SocialMedia,
        SocialIconLink,
        SocialLogo,
        SocialWrap,
        Rights
} from './FooterComp'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

    const toggleHome=()=>{
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinks>
                    <FooterLinkWrap>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FLinks to="signin">How it works</FLinks>
                                <FLinks to="signin">Terms of Service</FLinks>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FLinks to="signin">How it works</FLinks>
                                <FLinks to="signin">Terms of Service</FLinks>
                        </FooterLinkItems>
                    </FooterLinkWrap>
                    <FooterLinkWrap>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FLinks to="signin">How it works</FLinks>
                                <FLinks to="signin">Terms of Service</FLinks>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FLinks to="signin">How it works</FLinks>
                                <FLinks to="signin">Terms of Service</FLinks>
                        </FooterLinkItems>
                    </FooterLinkWrap>
                </FooterLinks>
                <SocialMedia>
                    <SocialWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Logo</SocialLogo>
                        <Rights>
                            Logo C {new Date().getFullYear()} All Rights Reserved.
                        </Rights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" area-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" area-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" area-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" area-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
