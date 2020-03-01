import React, { useEffect, useState } from 'react';
import './index.css';
import { connect } from '../../services/socket.io';
import { Col, Row } from 'react-bootstrap';
import Chat from '../../components/Chat';
import ListaChat from '../../components/ListaChat';

const ChatMessage = ({ navigation }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (navigation.getParam('user') && navigation.getParam('user').username) {
            setUser(navigation.getParam('user'));
            connect();
        }
        //  else {
        //     navigation.navigate('Login')
        // }
    }, []);
    
    return (
        <div className='mainChat'>
            <Row>
                <Col className='listaMensagens' md={3}>
                    <ListaChat />
                </Col>  
                <Col md={9}>
                    <Chat/>
                </Col>
            </Row>
        </div>
    )
}

export default ChatMessage;