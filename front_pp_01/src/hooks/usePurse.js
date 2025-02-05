import { useEffect, useState } from "react";
import { PurseService } from "../services";

export const UsePurse = () =>{
    const [coins, setCoins] = useState([]);

    useEffect(()=> {
        const TraerMonedero = async () => {
            try {
                const data = await PurseService.getCurrency();
                setCoins(data);
            } catch (error) {
                console.error("no se pudo traer el monedero", error)
            }
        };
        TraerMonedero();
    });
    return {coins};
};