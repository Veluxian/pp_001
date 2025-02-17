import { useState } from "react";
import { addItems } from "../../services";
import { Button } from "../../components";
import { Form } from "react-bootstrap";

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
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor="id">Id</Form.Label>
                <Form.Control 
                    type="number"
                    id="id"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    />

                <Form.Label htmlFor="nombre">nombre</Form.Label>
                <Form.Control 
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    />

                <Form.Label htmlFor="cantidad">cantidad</Form.Label>
                <Form.Control 
                    type="number"
                    id="cantidad"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleChange}
                    />

                <Form.Label htmlFor="precio">precio</Form.Label>
                <Form.Control 
                    type="number"
                    id="precio"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    />
            </Form.Group>
            
            <Button type={"submit"} className={"envio"} variant="primary">
                Añadir
            </Button>
        </Form>
    )
};