import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import { ListGroup } from 'react-bootstrap';

const ListaChat = () => {
    return (
        <ListGroup variant="flush">
            <ListGroup.Item>Chat Global <FaChevronRight style={{float: "right", fontSize: 13, marginTop: 5}}/> </ListGroup.Item>
            <ListGroup.Item>Chat Global <FaChevronRight style={{float: "right", fontSize: 13, marginTop: 5}}/> </ListGroup.Item>
        </ListGroup>
    )
}

export default ListaChat;