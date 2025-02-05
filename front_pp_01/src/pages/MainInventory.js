import React from "react";
import { Purse, Inventory } from "../components";
import {usePurse, useInventory} from "../hooks"; 


export const MainInventory = () => {
    
    const {items} = useInventory();
    const {coins} = usePurse();

    return(
        <>.
        <div>
            <h1>Esto es una prueba para el monedero</h1>
            <Purse coins={coins} />
        </div>
        <div>
            <Inventory data={items} />
        </div>
        </>
    );
}