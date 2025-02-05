import React from "react";

export const CreateButton = ({onClick, children, className}) => {
    return(
        <button
            onClick={onClick}
            className= {className}
        >
            {children}
        </button>
    );
};