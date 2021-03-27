import React from 'react'
import {Button} from '../ButtonComp'

import {
    Column2,
    Img,
    ImgWrap,
    InfoContainer,
    Info,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Btn } from './InfoComp'
const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    darkText,
    headLine,
    description,
    primary,
    dark,
    dark2,
    img,
    alt,
    buttonLabel
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <Info>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Btn>
                                    <Button to='home'
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact="true"
                                            offset={-80}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </Btn>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </Info>
            </InfoContainer>
        </>
    )
}

export default InfoSection
