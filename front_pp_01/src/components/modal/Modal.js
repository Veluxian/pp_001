import React from "react";
import { Button } from "../../components";

export const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className="test-modal">
            <div classname="content-modal">
                {children}
                <Button onClick={onClose} className={"boton de prueba"}>
                    &times;
                </Button>
            </div>
        </div>
    );
};