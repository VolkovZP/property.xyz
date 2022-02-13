import React, { useState } from 'react';
import { EstimateContaierItem, EstimateContainer, EstimateItem } from '../../styles/EstimateMenu';

const activeItemStyle = {
    borderBottom: `2px solid red`,
    fontWeight: 'bold'
}

const estimateOptions = [
    {
        id: 1,
        name: 'Property Estimate',
    },
    {
        id: 2,
        name: 'Rental Estimate'
    },
]

interface IEstimateMenuProps {
    index: number,
    setIndex: (num: number) => void
}

export default function EstimateMenu({ index, setIndex }: IEstimateMenuProps) {

    return (
        <EstimateContainer>
            <EstimateContaierItem>
                {estimateOptions.map(({ id, name }) => <EstimateItem
                    style={index === id ? activeItemStyle : {}}
                    onClick={() => setIndex(id)} key={id}>{name}</EstimateItem>)}
            </EstimateContaierItem>
        </EstimateContainer>
    );
}

