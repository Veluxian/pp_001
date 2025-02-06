import React from "react";
import { Purse, Inventory, Button } from "../components";
import { useInventory, usePurse } from "../hooks"; 


export const MainInventory = () => {
    
    //const {items} = usePurse();
    //const {coins} = useInventory();
    
    const coins = {a:1, b:2, c:3};
    const items = [{a1:1, a2:2, a3:3}, {b1:1, b2:2, b3:3}];

    const handleAlert = () => {
        alert("alerta")
    };

    return(
        <>
        <div>
            <h1>Esto es una prueba para el monedero</h1>
            <Purse coins={coins} />
        </div>
        <div>
            <Inventory data={items} />
        </div>
        <div>
            <Button onClick={handleAlert} className={"prueba"}>
                Prueba
            </Button>
        </div>
        </>
    );
}