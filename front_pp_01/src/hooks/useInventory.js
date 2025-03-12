import { useEffect, useState } from "react";
import { getItems, addSelledItem, deleteItem } from "../services";

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

export const handleSell = (id) =>{
   return null
};

export const handleDelete = (id) =>{
    return null
}