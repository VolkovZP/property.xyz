import React from 'react';
import { RentalEstimateContainer, RentalText } from '../../styles/Estimate.styles';
import EstimatePrice from '../EstimatePrice';
import PoweredBy from '../PoweredBy';




export default function PropertyEstimate() {
    return (
        <>
            <EstimatePrice price='£1000pcm' percentage='81' />
            <RentalEstimateContainer>
                <RentalText>
                    Our partners check many datasets, property sales and recent valuations to create an instant estimate. This is great as a quick guide but shouldn't be wholly relied upon if you are purchasing a property, selling a property or getting finance. For any of these speaking with a human is always best. Please select from any of the below to help your next step
                </RentalText>
                <PoweredBy />
            </RentalEstimateContainer>
        </>

    );
}
