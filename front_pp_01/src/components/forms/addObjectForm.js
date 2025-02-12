import { useState } from "react";
import { addItems } from "../../services";
import { Button } from "../../components";

export const AddObject = () => {
    
    const [formData, setFormData]= useState({
        id: 0,
        nombre:'',
        cantidad: 0,
        precio: 0
    });
    
    const handleChange = (e) => {
        const { name, value, type} = e.target;

        const newValue = type === 'number' ? parseInt(value || 0, 10) : value;

        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await addItems(formData)
            setFormData({ id: 0, nombre: '', cantidad: 0, precio: 0 });
        } catch (error) {
            console.error("Hubo un error:", error);
            alert("error al intentar ingresar, intenta denuevo")
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Id</label>
            <input 
                type="number"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                />

            <label htmlFor="nombre">nombre</label>
            <input 
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                />

            <label htmlFor="cantidad">cantidad</label>
            <input 
                type="number"
                id="cantidad"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleChange}
                />

            <label htmlFor="precio">precio</label>
            <input 
                type="number"
                id="precio"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                />
            
            <Button type={"submit"} className={"envio"}>
                Añadir
            </Button>
        </form>
    )
};