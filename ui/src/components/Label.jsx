import React from "react";

export const Label = ({ children, caption }) => {

    return (
        <label>
            <div>{caption}</div>
            {children}
        </label>
    );
};
