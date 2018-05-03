import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap'

import { login } from '../services/TendermintService';

// Component

export default () => (
    <div className="welcome">
        <Jumbotron>
            <Container>
                <Row>
                    <Col xs="12">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">Ambrosus</span>
                            <span className="heading-primary--sub">please sign in</span>
                        </h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={{ size: 10, order: 1, offset: 1 }} sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                        <Button color="success" block onClick={() => login("driver") }>I'm a Driver</Button>
                    </Col>

                    <Col xs={{ size: 10, order: 2, offset: 1 }} sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }} className="py-4">
                        <Button color="success" block onClick={() => login("buyer") }>I'm a Buyer</Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </div>
)
