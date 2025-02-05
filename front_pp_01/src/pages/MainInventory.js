import React from "react";
import { Purse, Inventory } from "../components";

export const MainInventory = () => {
    const testCoins = {
        copper: 100,
        silver: 50,
        gold: 25,
        electrum: 14,
        platinum: 7
    };

    const testInventory =[
        {id: 1,
        nombre: "espada",
        cantidad: 1,
        precio: 10},
        {id: 101,
        nombre: "Cola raton",
        cantidad: 50,
        precio: 1},
        {id: 5,
        nombre: "pocion",
        cantidad: 5,
        precio: 40}        
    ];

    return(
        <>.
        <div>
            <h1>Esto es una prueba para el monedero</h1>
            <Purse coins={testCoins} />
        </div>
        <div>
            <Inventory data={testInventory} />
        </div>
        </>
    );
}