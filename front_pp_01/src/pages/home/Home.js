import React from "react";
import '../../assets/styles/index.scss';
import {Container} from "react-bootstrap";

export const Home = () => {
    return(
        <>
            <Container className="d-flex justify-content-center">
                <h1>Primera prueba</h1>
            </Container>
            <Container className="d-flex justify-content-center">
                <p> Probando diferentes cosas</p>
            </Container>
        </>
    );
}

