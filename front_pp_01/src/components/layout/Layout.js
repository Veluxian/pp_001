import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/styles/index.scss";

export const Layout = ({children}) => {
    return (
        <Container className="main-page">
            {children}
        </Container>
    );
};