import React from "react";
import { Button as BT } from "react-bootstrap";

export const Button = ({onClick, children, className, type}) => {
    return(
        <BT
            onClick={onClick}
            className= {className}
            type = {type}
        >
            {children}
        </BT>
    );
};