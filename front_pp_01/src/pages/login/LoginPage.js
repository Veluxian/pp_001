import React  from "react";
import { LoginForm }from "../../components"
import { Container, Row, Col, Card, Nav  } from "react-bootstrap";

export const Login = () => {
    return(
        <>
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col  md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title> ¡La Aventura Aguarda! </Card.Title>
                                <LoginForm />
                                <Nav.Link href="/singin">¿Nuevo en la taberna?</Nav.Link>
                                <Nav.Link href="/recover">¿Necesitas una pocima de recuerdo?</Nav.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}