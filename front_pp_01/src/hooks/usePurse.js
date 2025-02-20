import { useEffect, useState } from "react";
import { getCurrency, getCurrencyById, addSelledItem } from "../services";

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

    useEffect(() =>{
        const TraerMonederoId = async (id) =>{
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

export const useAddSelledItem = (idPurse, data) => {
    const [updated, setUpdates] = useState([]);

    useEffect (() =>{
    const VenderObjeto = async (idPurse, data) => {
        try{
            const result = await addSelledItem(idPurse, data);
            setUpdates(result);
        } catch (error) {
            console.error('hubo un error')
        };
    };

    if (!updated.length){
        VenderObjeto(idPurse, data); 
    };
    
    return {updated};
    });
};