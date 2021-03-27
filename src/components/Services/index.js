import React from 'react'
import Icon1 from '../../images/img1.png'
import Icon2 from '../../images/img1.png'
import Icon3 from '../../images/img1.png'

import {
    ServicesContainer,
    ServicesH1,
    SWrapp,
    SCards,
    ServicesH2,
    ServicesP,
    SIcon
} from './ServiceComp'

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                    <SWrapp>
                        <SCards >
                            <SIcon src={Icon1}/>
                            <ServicesH2>Preium Benefits1</ServicesH2>
                            <ServicesP>Paragraph here</ServicesP>
                        </SCards>
                        <SCards >
                            <SIcon src={Icon2}/>
                            <ServicesH2>Preium Benefits2</ServicesH2>
                            <ServicesP>Paragraph here</ServicesP>
                        </SCards>
                        <SCards >
                            <SIcon src={Icon3}/>
                            <ServicesH2>Preium Benefits3</ServicesH2>
                            <ServicesP>Paragraph here</ServicesP>
                        </SCards>
                    </SWrapp>
            </ServicesContainer>
        </>
    )
}

export default Services;
