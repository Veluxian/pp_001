import { api } from "./ApiConfig";

export const getItems = async () =>{
    try {
        const response = await api.get('/items');
        return response.data;
    } catch (error) {
        console.error('Error buscando los items:', error)
        throw error;
    }
};

export const getItemById =async (id) => {
    try{
        const response = await api.get(`(/items/${id})`);
        return response.data
    } catch (error) {
        console.error('Error al buscar el item:', error)
        throw error;
    }
};

export const addItems = async (itemsData) =>{
    try {
        const response = await api.post('/items', itemsData);
        return response.data;
    } catch (error) {
        console.error('Error al crear nuevos items:', error)
        throw error
    }
};