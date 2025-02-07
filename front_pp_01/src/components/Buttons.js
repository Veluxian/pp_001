import React from "react";

export const Button = ({onClick, children, className, type}) => {
    return(
        <button
            onClick={onClick}
            className= {className}
            type = {type}
        >
            {children}
        </button>
    );
};