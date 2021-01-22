import React from "react";
import styled from "styled-components"

export const Label = ({ children, caption }) => {

    return (
        <StyledLabel>
            <div>{caption}</div>
            {children}
        </StyledLabel>
    );
};

const StyledLabel = styled.label`
    display: grid;
    grid-template-rows: auto auto;
    gap: 8px;
`