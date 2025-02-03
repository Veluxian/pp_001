import React from "react";

export function Inventory(data){
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([Id,Nombre,cantidad,precio]) => (
                    <tr key={Id}>
                        <td>{Id}</td>
                        <td>{Nombre}</td>
                        <td>{cantidad}</td>
                        <td>{precio}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}