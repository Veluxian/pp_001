import React from "react";
import { Modal } from "react-bootstrap";
import { Button as BT} from "../buttons/Buttons";

export const ModalDePrueba = ({isOpen, isClosed, children}) =>{
    if (!isOpen) return null;
    
    return (
        <>
            <Modal show={isOpen} onHide={isClosed} backdrop="static" keyboard={false}>
                <Modal.Header closeButton> 
                    aqui va el titulo
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <BT onClick={isClosed} variant={"danger"}>
                        cerrar
                    </BT>
                </Modal.Footer>
            </Modal>
        </>
    );
}