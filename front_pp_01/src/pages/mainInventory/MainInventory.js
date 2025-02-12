import React from "react";
import { Purse, Inventory, Button, Modal, AddObject } from "../../components";
import { useInventory, usePurse, useModal, usePurseById} from "../../hooks"; 


export const MainInventory = () => {
    
    const {coins} = usePurse();
    // const {coins} =usePurseById(1);
    const {items} = useInventory();
    const { isModalOpen, openModal, closeModal } = useModal();

    return(
        <>
        <div class="container d-flex justify-content-center">
            <h1>Esto es una prueba para el monedero</h1>
        </div>
        <Purse currency={coins} />
        <div class="container d-flex justify-content-center">
            <h1>Esto es una prueba para el inventario</h1>
        </div>
        <Inventory data={items} />
        <div class="container d-flex justify-content-center">
            <Button onClick={openModal} className={"prueba"}>
                Agrega un item
            </Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <AddObject />
            </Modal>
        </div>
        </>
    );
}