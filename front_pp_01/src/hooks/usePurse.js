import { useEffect, useState } from "react";
import { getCurrency } from "../services";

export const usePurse = () =>{
    const [coins, setCoins] = useState([]);

    useEffect(()=> {
        const TraerMonedero = async () => {
            try {
                const data = await getCurrency();
                setCoins(data);
            } catch (error) {
                console.error("no se pudo traer el monedero", error)
            }
        };
        TraerMonedero();
    });
    return {coins};
};