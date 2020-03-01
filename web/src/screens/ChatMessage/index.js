import React, { useEffect, useState } from 'react';
import './index.css';
import { connect } from '../../services/socket.io';

const ChatMessage = ({ navigation }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (navigation.getParam('user').username) {
            setUser(navigation.getParam('user'));
            connect(); 
        } else {
            navigation.navigate('Login')
        }
    }, []);
    
    return <div>
        {user ? user.username : 'nada'}
    </div>
}

export default ChatMessage;