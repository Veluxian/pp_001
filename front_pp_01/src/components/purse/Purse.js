import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const  Purse = ({currency}) => {
    if (!currency || !Array.isArray(currency)) {
        return(<div class="container d-flex justify-content-center"> no hay Monedas</div>)
    }
    
    return(
        <Container className="d-flex justify-content-center">
            {currency.map((purse) => (
                <Container key={purse.idPurse} className="d-flex justify-content-center">
                    <Row>
                        <h3> Monedero numero : {purse.idPurse}</h3>
                    </Row>
                    <Row>
                        <ul>
                            {purse.coins.map((coins) => (
                                <li key={coins}>
                                    Tipo de moneda : {coins.coinName}, Cantidad: {coins.quantity}
                                </li>
                            ))}
                        </ul>
                    </Row>
                </Container>
            ))}
        </Container>
    );
}