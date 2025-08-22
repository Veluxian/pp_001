import { useState } from "react";
import { Button } from "../../components";
import { Form } from "react-bootstrap";

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    const handleInputChange = (event) =>{
        const { name, value } = event.target;
        setFormData({ ...FormData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos del formulario enviados:', formData);
        //Api de login
    };

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" condtrolId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingresa tu Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required />
            </Form.Group>
            <Form.Group className="mb-3" condtrolId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder=""
                    value={formData.password}
                    onChange={handleInputChange}
                    required />
            </Form.Group>
            <Button type="submit">
                ¡Adelante!
            </Button>
        </Form>
    )
}