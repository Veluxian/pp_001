import { api } from "./ApiConfig";

export const getCurrency = async () => {
    try{
        const response = await api.get('/currency/acutalCurrency');
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error al traer las monedas:', error);
        throw error;
    }
};