import { useEffect, useState } from "react";
import { getItems } from "../services";

export const useInventory = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        const TraerItems = async () => {
            try {
                const data = await getItems();
                setItems(data);
            } catch (error) {
                console.error("no se pudo traer los items:", error)
            }
        };
        TraerItems();
    });
    return {items}
};