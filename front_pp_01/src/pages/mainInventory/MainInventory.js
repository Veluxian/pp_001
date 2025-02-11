import React from "react";
import { Purse, Inventory, Button, Modal, AddObject } from "../../components";
import { useInventory, usePurse, useModal } from "../../hooks"; 


export const MainInventory = () => {
    
    const {coins} = usePurse();
    //const {coins} = useInventory();
   /* 
    const currency = [
        {
            idPurse : 1, 
            coins: [
            { coinType: "oro", quantity : 10}, 
            {coinType :"plata", quantity:20},
            ]
        },
        {
            idPurse :2,
            coins: [
                { coinType :"electrum", quantity: 5},
                {coinType: "platinum", quantity: 2},
            ]
        },
    ];
*/
    const items = [{a1:1, a2:2, a3:3}, {b1:1, b2:2, b3:3}];
    const { isModalOpen, openModal, closeModal } = useModal();

    return(
        <>
        <div>
            <h1>Esto es una prueba para el monedero</h1>
            <Purse currency={coins} />
        </div>
        <div>
            <Inventory data={items} />
        </div>
        <div>
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