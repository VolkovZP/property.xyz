
import React, { useState } from 'react';
import EstimateMenu from '../components/EstimateMenu';
import EstimatePrice from '../components/EstimatePrice';
import PropertyEstimate from '../components/EstimateRental';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderForm from '../components/HeaderForm';
import Main from '../components/Main';
import ServiceFeedback from '../components/ServiceFeedback';
import { EstimateMainContainer, ViewportHeightWrapper } from '../styles/Global.styles';



export default function Result() {
    const [index, setIndex] = useState<number>(1)
    return (
        <>
            <ViewportHeightWrapper>
                <Header />
                <ServiceFeedback />
                <HeaderForm />
                <EstimateMainContainer>
                    <Main>
                        <EstimateMenu index={index} setIndex={setIndex} />
                        {
                            (() => {
                                switch (index) {
                                    case 1:
                                        return <PropertyEstimate />
                                    case 2:
                                        return (
                                            <>
                                                <EstimatePrice price='£1000pcm' percentage='81' />
                                                <div>asdaeqweqweqeqw</div>
                                            </>
                                        )
                                    default:
                                        return null;
                                }
                            })()
                        }
                    </Main>
                </EstimateMainContainer>
            </ViewportHeightWrapper>
            <Footer />
        </ >
    );
}



