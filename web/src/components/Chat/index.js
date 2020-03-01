import React, { useState } from 'react';
import './index.css';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Chat = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        
    }

    return (
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
    )
}

export default Chat;