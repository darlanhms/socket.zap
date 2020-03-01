import React, { useEffect, useState } from 'react';
import './index.css';
import { connect } from '../../services/socket.io';



const ChatMessage = ({ navigation }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(navigation.getParam('user'));
        connect();
    }, []);
    
    return <div>
        {user ? user.username : 'nada'}
    </div>
}

export default ChatMessage;