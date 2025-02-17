import React from "react";
import { Button } from "../../components";
import { Container } from "react-bootstrap";

export const Modal = ({isOpen, children}) => {
    if (!isOpen) return null;

    return (
        <>
        <Container className="d-flex justify-content-center">
            {children}
        </Container>
        </>
    );
};