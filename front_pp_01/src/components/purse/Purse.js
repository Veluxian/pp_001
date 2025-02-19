import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const  Purse = ({currency}) => {
    if (!currency || !Array.isArray(currency)) {
        return(<div class="container d-flex justify-content-center"> no hay Monedas</div>)
    }
    
    return(
            <Container className="d-flex justify-content-center">
                {currency.map((purse) => (
                <Container key={purse.idPurse} className="justify-content-center">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                        <h3> Monedero numero : {purse.idPurse}</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                        <ul>
                            {purse.coins.map((coins) => (
                                <li key={coins}>
                                    Tipo de moneda : {coins.coinName}, Cantidad: {coins.quantity}
                                </li>
                            ))}
                        </ul>
                        </Col>
                    </Row>
                </Container>
                ))}
            </Container>
    );
}