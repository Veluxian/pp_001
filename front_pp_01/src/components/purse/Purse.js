import React from "react";
import { Container } from "react-bootstrap";

export const  Purse = ({currency}) => {
    if (!currency || !Array.isArray(currency)) {
        return(<div class="container d-flex justify-content-center"> no hay Monedas</div>)
    }
    
    return(
        <Container className="justify-content-center">
            {currency.map((purse) => (
                <Container key={purse.idPurse}>
                    <h3> Monedero numero : {purse.idPurse}</h3>
                    <ul>
                        {purse.coins.map((coins) => (
                            <li key={coins}>
                                Tipo de moneda : {coins.coinName}, Cantidad: {coins.quantity}
                            </li>
                        ))}
                    </ul>
                </Container>
            ))}
        </Container>
    );
}