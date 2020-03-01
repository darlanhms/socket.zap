import React, { useEffect } from 'react';
import './index.css';
import { connect } from '../../services/socket.io';



const ChatMessage = () => {

    useEffect(() => {
        connect();
    }, []);
    
    return <>Chat</>
}

export default ChatMessage;