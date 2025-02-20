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

export const getCurrencyById = async (id) => {
    try{
        const response = await api.get(`/${id}`)
        return response.data
    } catch (error) {
        console.error('error al traer el monedero',error);
        throw error;
    }
};

export const addSelledItem = async (idPurse, data) =>{
    try{
        const response = await api.put(`/${idPurse}/`,data)
        return response.data
    } catch (error) {
        console.error('Ups Al parecer el vendedor no quiere esto', error);
        throw error;
    }
}