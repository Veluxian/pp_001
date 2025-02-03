import React from "react";
import { Purse } from "../components";

export function MainInventory(){
    const testCoins = {
        copper: 100,
        silver: 50,
        gold: 25,
        electrum: 14,
        platinum: 7
    };

    return(
        <div>
            Esto es una prueba para el monedero
            <div>
                <Purse coins={testCoins} />
            </div>
        </div>
    );
}