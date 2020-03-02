import React, { useEffect, useState, useGlobal } from 'reactn';
import './index.css';
import { connect } from '../../services/socket.io';
import { Col, Row } from 'react-bootstrap';
import Chat from '../../components/Chat';
import ListaChat from '../../components/ListaChat';

const ChatMessage = ({ navigation }) => {
    const [user, setUser] = useState({});
    const [currentMessages, setCurrentMessages] = useState([]);
    const [global, setGlobal] = useGlobal();

    useEffect(() => {
        if (!global.acces_token && !localStorage.getItem('token')) {
            navigation.navigate('Login')
        }
        setCurrentMessages([
            {
                username: 'zezinho',
                mensagem: 'alo'
            },
            {
                username: 'carlinho',
                mensagem: 'teste'
            },
            {
                username: 'joaozinhp',
                mensagem: 'mensagem 3'
            },
            {
                username: 'alberto',
                mensagem: 'ksjaskdgjksjfsd'
            },
            {
                username: 'cleison',
                mensagem: 'teste ultimo'
            },
        ])
    }, []);
    
    return (
        <div className='mainChat'>
            <Row>
                <Col className='listaMensagens' md={3}>
                    <ListaChat />
                </Col>  
                <Col md={9}>
                    <Chat messages={currentMessages}/>
                </Col>
            </Row>
        </div>
    )
}

export default ChatMessage;