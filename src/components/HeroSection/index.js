import React,{useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtn,ArrowForward,ArrowRight} from './HeroComp'
import {Button} from '../ButtonComp';

const HeroSection = () => {

    const [hover, setHover]=useState(false);

    const onHover=()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted
                src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>The first you need to begin your day.</HeroH1>
                <HeroP>
                    Sign up fora new account today and get 20% in your first order
                </HeroP>
                <HeroBtn>
                    <Button to='signup'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtn>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
