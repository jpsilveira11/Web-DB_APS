import { useState, useEffect } from 'react';
import { Stack, Container , Form, Button, Image} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './login.css';

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const { id, value } = e.target;
        switch (id) {
            case 'loginEmail':
                setEmail(value);
                break;
            case 'loginPassword':
                setPassword(value);
                break;
            default:
                break;
        }
    };

     // Verificar se todos os campos foram preenchidos corretamente
     useEffect(() => {
        const isFormValid = email !== '' && password !== '';
        setIsButtonDisabled(!isFormValid);
    }, [email, password]);

    const handleClick = (route: string) => {
        navigate(route)
      };

    return (
        <>
           <div className="page-container">
                <Container className="login-container">
                    <Stack gap={4} className="align-items-center justify-content-center">
                    <Image className="login-logo" src="/img/pixel-logotipo.png" height={120} />
                    <h4 className="fw-bold">Conecte-se à sua Conta Pixel</h4>
                    <Form className="w-100">
                        <Form.Group className="mb-3" controlId="loginEmail">
                        <Form.Label>E-MAIL</Form.Label>
                        <Form.Control type="email" 
                            placeholder="Digite seu e-mail" 
                            value={email}
                            onChange={handleInputChange} 
                        />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="loginPassword">
                        <Form.Label>SENHA</Form.Label>
                        <Form.Control type="password" 
                            placeholder="Digite a senha" 
                            value={password}
                            onChange={handleInputChange}
                        />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="loginCheckbox">
                        <Form.Check type="checkbox" label="Lembrar-me" />
                        </Form.Group>

                        <Button className="mb-2 w-100 fw-bold" 
                            variant="primary" 
                            onClick={() => handleClick("/welcome")}
                            disabled={isButtonDisabled}
                        >
                        CONECTAR
                        </Button>

                        <Button className="mb-2 w-100 text-decoration-none" variant="link" type="submit">
                        Esqueceu sua senha?
                        </Button>

                        <Button className="w-100 fw-bold" 
                            variant="secondary" 
                            onClick={() => handleClick('/register')}
                        >
                        CRIAR CONTA
                        </Button>
                    </Form>
                    </Stack>
                </Container>
            </div>
            
        </>
    )
}

export default Login;