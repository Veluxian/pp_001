import React from "react";
import { Purse, Inventory, Button, Modal, AddObject } from "../../components";
import { useInventory, usePurse, useModal, usePurseById} from "../../hooks";
import { Container } from "react-bootstrap";

export const MainInventory = () => {
    
    //const {coins} = usePurse();
    //const {coins} =usePurseById(1);
    //const {items} = useInventory();
    const { show, handleShow, handleClose } = useModal();
    const coins = [
        {
            idPurse : 1,
            coins:[
                {   
                    coinName:"oro",
                    quantity : 10
                },
                {
                    coinName :"plata",
                    quantity : 20
                }
            ]
        }
    ];

    const items =[
        {
            id: 1,
            nombre:"espada",
            cantidad: 2,
            precio: 10
        },
        {
            id:2,
            nombre: "casco",
            cantidad: 1,
            precio: 12
        },
        {
            id:3,
            nombre:"capa",
            cantidad:1,
            precio: 15
        }
    ];

    return(
        <>
        <Container className="d-flex justify-content-center">
            <h1>Esto es una prueba para el monedero</h1>
        </Container>
        <Purse currency={coins} />
        <Container class="container d-flex justify-content-center">
            <h1>Esto es una prueba para el inventario</h1>
        </Container>
        <Inventory data={items} />
        <Container className="d-flex justify-content-left">
            <Button onClick={handleShow} className={"prueba"} variant={"success"}>
                Agrega un item
            </Button>
        </Container>
        <Container className="d-flex justify-content-center">
            <Modal isOpen={show}>
                <AddObject  isClosed={handleClose}/>
            </Modal>
        </Container>
        </>
    );
}