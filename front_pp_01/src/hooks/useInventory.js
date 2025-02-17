import { useEffect, useState } from "react";
import { getItems } from "../services";

export const useInventory = () =>{
    const [item, setItems] = useState([]);

    useEffect(() => {
        const TraerItems = async () => {
            try {
                const data = await getItems();
                setItems(data);
            } catch (error) {
                console.error("no se pudo traer los items:", error)
            }
        };
        if (!item.length){
            TraerItems();
        };
    });
    return {item};
};