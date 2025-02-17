import React from "react";
import { Modal as MD } from "react-bootstrap";

export const Modal = ({isOpen, isClosed,children}) => {
    if (!isOpen) return null;

    return (
        <>
        <MD show={isOpen} onHide={isClosed} backdrop="static" keyboard={false}>
            <MD.Header className="justify-content-center">
                Agrega tu Objeto
            </MD.Header>
            <MD.Body>
                {children}
            </MD.Body>
        </MD>
        </>
    );
};