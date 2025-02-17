import React from "react";
import { Container } from "react-bootstrap";
import { ModalDePrueba, Button as BT } from "../../components/";
import { PruebaUsarModal } from "../../hooks";

export const Prueba = () =>{

    const {show, handleShow, handleClose} = PruebaUsarModal();
    return(
        <>
        <Container>
            <BT onClick={handleShow} variant={"success"}>
                Abrir Modal
            </BT>
        </Container>
        <Container>
            <ModalDePrueba isOpen={show} isClosed={handleClose}>
                <h1> esto esta dentro del modal</h1>
            </ModalDePrueba>
        </Container>
        </>
    );
};