import React, { useState, useEffect, useGlobal } from 'reactn';
import './index.css';
import { Form, Button } from 'react-bootstrap';
import api from '../../services/api';

const LoginScreen = ({ navigation }) => {
    const [cadastro, setCadastro] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [global, setGlobal] =  useGlobal();

    useEffect(() => {
        if (!global.access_token) {
            setGlobal({ access_token: localStorage.getItem('token') });
        }
    }, []);

    useEffect(() => {
        if (global.access_token) {
            navigation.navigate('Chat');
        }
    }, [global.access_token])

    const handleChangeScreen = () => {
        setCadastro(true);
    }

    const handleSubmitCadastro = async () => {
        if (username && password && email) {
            const data = await api.post('/users/create', {
                username,
                password,
                email,
            });

            const dados = data.data;

            if (dados && dados.error) {
                alert(dados.error)
            } else {
                if (dados.token) {
                    localStorage.setItem('token', dados.token);
                }
                navigation.navigate('Chat', { user: dados });
            }
        } else {
            alert('Falta preencher campos');
        }
    }

    const handleSubmitLogin = async () => {
        if (username && password) {
            const data = await api.post('/users/login', {
                username,
                password,
            });

            const dados = data.data;

            if (dados) {
                if (dados && dados.error) {
                    alert(dados.error)
                } else {
                    localStorage.setItem('token', dados.token);
                    navigation.navigate('Chat', { user: dados });
                }
            } else {
                alert('Usuário ou senha incorretos')
            }
        } else {
            alert('Faltam preencher campos');
        }
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