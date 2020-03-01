import React, { useState } from 'react';
import './index.css';
import { Form, Button } from 'react-bootstrap';
import api from '../../services/api';

const LoginScreen = () => {
    const [cadastro, setCadastro] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeScreen = () => {
        setCadastro(true)
    }

    const handleSubmitCadastro = async () => {
        if (username && password && email) {
            const data = await api.post('/users/create', {
                username,
                password,
                email,
            });
            console.log(data);
        } else {
            alert('Falta preencher campos')
        }
    }

    const handleSubmitLogin = async () => {
        const data = await api.post('/users/login', {
            username,
            password,
        });
        console.log(data);
    }
    
    return (
        <div className='mainCadastro'>
            <h1 className='titleScreen' >Faça login para começar a usar o chat</h1>
            {cadastro ? (
            <Form className='formCadastro'>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    defaultValue={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text" 
                    placeholder="Informe o seu username" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control 
                    defaultValue={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Informe o seu e-mail" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control 
                    defaultValue={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Informe sua melhor senha" />
                </Form.Group>
                <Button variant="dark" onClick={() => handleSubmitCadastro()} className='buttonCenter'>
                    Cadastrar
                </Button>
            </Form>
            ) : (
            <Form className='formCadastro'>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    defaultValue={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text" 
                    placeholder="Informe o seu username" 
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control 
                    defaultValue={password}
                    username={password} 
                    onChange={e => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Informe sua melhor senha" 
                    />
                </Form.Group>
                <p>Ainda não possui uma conta? <a onClick={() => handleChangeScreen()}>cadastre-se</a></p>
                <Button variant="dark" onClick={() => handleSubmitLogin()} className='buttonCenter'>
                    Login
                </Button>
            </Form>
            )}
        </div>

    )
}

export default LoginScreen;