import React from "react";
import { Button as BT } from "react-bootstrap";

export const Button = ({onClick, children, className, type, variant}) => {
    return(
        <BT 
            variant={variant}
            onClick={onClick}
            className= {className}
            type = {type}
        >
            {children}
        </BT>
    );
};