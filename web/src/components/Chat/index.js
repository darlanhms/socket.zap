import React, { useState } from 'react';
import './index.css';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const Chat = ({ messages }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        
    }

    return (
        <div>
            <ListGroup className='divMessages'>
                {messages && messages.length > 0 ? messages.map(message => {
                    return (
                        <ListGroup.Item key={Math.random() * 1000000}>{message.mensagem}</ListGroup.Item>
                    )
                }) : <></>}
            </ListGroup>
            <Row className='formMensagem'>
                <Col xs={10}>
                    <Form.Control 
                    defaultValue={message}
                    onChange={e => setMessage(e.target.value)}
                    type="text" 
                    placeholder="Digite a mensagem que deseja enviar" />
                </Col>
                <Col xs={2}>
                <Button variant="dark" onClick={() => handleSendMessage()} className='buttonCenter'>
                        Enviar
                </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Chat;