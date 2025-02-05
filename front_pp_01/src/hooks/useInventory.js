import { useEffect, useState } from "react";
import { InventoryService } from "../services";

export const useInventory = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        const TraerItems = async () => {
            try {
                const data = await InventoryService.getItems();
                setItems(data);
            } catch (error) {
                console.error("no se pudo traer los items:", error)
            }
        };
        TraerItems();
    });
    return {items}
};