import { api } from "./ApiConfig";

export const getCurrency = async () => {
    try{
        const response = await api.get('/currency');
        return response.coins;
    } catch (error) {
        console.error('Error al traer las monedas:', error);
        throw error;
    }
};