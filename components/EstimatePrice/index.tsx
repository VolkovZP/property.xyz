import React from 'react';
import { ContainerEstimitePrice } from '../../styles/Estimate.styles';


interface IEstimatePrice {
    price: string
    percentage: string
}

export default function EstimatePrice({ price, percentage }: IEstimatePrice) {
    return (
        <ContainerEstimitePrice style={{ borderBottom: "1px solid #C6C8D3" }}>
            <h1>Estimated Price</h1>
            <h3>{price}</h3>
            <span>{percentage}% confidance level</span>
        </ContainerEstimitePrice>
    )
}
