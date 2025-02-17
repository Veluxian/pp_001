import React from "react";
import { Table, Container } from "react-bootstrap";

export const Inventory = ({data}) => {
    if (!data || !Array.isArray(data)) {
        return(<div class="container d-flex justify-content-center"> no hay objetos </div>)
    }

    return(
        <Container classname="d-flex justify-content-center">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.precio}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}