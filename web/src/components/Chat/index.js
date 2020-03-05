import React, { useState } from 'react';
import './index.css';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const Chat = ({ messages }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        
    }

    const generateRandomColor = () => {
        let r,g,b = 0;
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b})`
    }

    return (
        <div>
            <ListGroup className='divMessages'>
                {messages && messages.length > 0 ? messages.map(message => {
                    return (
                        <ListGroup.Item key={Math.random() * 1000000}>
                            <p style={{color: generateRandomColor()}}>{message.username}</p>
                            {message.mensagem}
                        </ListGroup.Item>
                    )
                }) : <></>}
            </ListGroup>
            <Row className='formMensagem'>
                <Col lg={10} md={8} sm={6}>
                    <Form.Control 
                    defaultValue={message}
                    onChange={e => setMessage(e.target.value)}
                    type="text" 
                    placeholder="Digite a mensagem que deseja enviar" />
                </Col>
                <Col lg={2} md={4} sm={6}>
                <Button variant="dark" onClick={() => handleSendMessage()} className='buttonCenter'>
                        Enviar
                </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Chat;