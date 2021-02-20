import React from 'react';
import styled from 'styled-components';

interface ILabel {
    caption: string;
    horizontal?: boolean;
}

export const Label: React.FC<ILabel> = ({ children, caption, horizontal }) => {
    return (
        <>
            {horizontal ? (
                <StyledLabelHoriz>
                    <div>{caption}</div>
                    {children}
                </StyledLabelHoriz>
            ) : (
                <StyledLabelVert>
                    <div>{caption}</div>
                    {children}
                </StyledLabelVert>
            )}
        </>
    );
};

const StyledLabelVert = styled.label`
    display: grid;
    grid-template-rows: auto auto;
    gap: 8px;
`;

const StyledLabelHoriz = styled.label`
    display: grid;
    grid-template-columns: 30% 1fr;
    gap: 8px;
    align-items: center;
`;
