import { useEffect, useState } from "react";
import { getCurrency, getCurrencyById } from "../services";

export const usePurse = () =>{
    const [coins, setCoins] = useState([]);

    useEffect(()=> {
        const TraerMonedero = async () => {
            try {
                const data = await getCurrency();
                setCoins(data);
            } catch (error) {
                console.error("no se pudo traer el monedero", error);
            }
        };
        if (!coins.length){
            TraerMonedero();
        };
    });
    return {coins};
};

export const usePurseById = (id) =>{
    const [coins, setCoins] = useState([]);
    const id = id;

    useEffect(() =>{
        TraerMonederoId = async (id) =>{
            try{
                const data = await getCurrencyById(id);
                setCoins(data);
            } catch (error){
                console.error('error al traer el monedero y dinero', error);
            };
        };
        if (!coins.length){
            TraerMonederoId(id);
        };
        return {coins};
    });
};

// {currency: coins}