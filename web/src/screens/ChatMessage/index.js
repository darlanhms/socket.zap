import React, { useEffect, useState, useGlobal } from 'reactn';
import './index.css';
import { connect } from '../../services/socket.io';
import { Col, Row } from 'react-bootstrap';
import Chat from '../../components/Chat';
import ListaChat from '../../components/ListaChat';

const ChatMessage = ({ navigation }) => {
    const [currentMessages, setCurrentMessages] = useState([]);
    const [global, setGlobal] = useGlobal();

    useEffect(() => {
        if (!global.acces_token && !localStorage.getItem('token')) {
            navigation.navigate('Login')
        } else {
            setGlobal({ access_token: (localStorage.getItem('token') || global.acces_token)})
        }
        setCurrentMessages([
            {
                username: 'zezinho',
                mensagem: 'alasdasdaso'
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
                mensagem: 'tstessss'
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
                <Col  md={3} className='listaMensagens'>
                    <ListaChat />
                </Col>  
                <Col md={9} style={{backgroundColor: "#ffffdb", borderRadius: "0px 10px 10px 0px", overflow: 'auto'}}>
                    <Chat messages={currentMessages}/>
                </Col>
            </Row>
        </div>
    )
}

export default ChatMessage;