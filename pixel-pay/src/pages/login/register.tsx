import { useState, useEffect} from 'react';
import { Stack, Container , Form, Button, Image} from 'react-bootstrap';
import './login.css';

function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const validatePassword = (password: string) => {
        // Expressão regular para verificar se a senha atende aos critérios:
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
        return passwordRegex.test(password);
      };
      
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const { id, value } = e.target;
        switch (id) {
            case 'registerName':
                setName(value);
                break;
            case 'registerEmail':
                setEmail(value);
                break;
            case 'registerPassword':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    // Verificar se todos os campos foram preenchidos corretamente
    useEffect(() => {
        const isFormValid = name !== '' && email !== '' && validatePassword(password);
        setIsButtonDisabled(!isFormValid);
    }, [name, email, password]);

    const handleClick = () => {
        // Lógica para processar o envio do formulário
        console.log('Formulário enviado');
      };

    return (
        <>
           <div className="page-container">
                <Container className="login-container">
                    <Stack gap={4} className="align-items-center justify-content-center">
                    <Image className="login-logo" src="/img/pixel-logotipo.png" height={120} />
                    <h4 className="fw-bold">Criar sua Conta Pixel</h4>
                    <Form className="w-100">
                        <Form.Group className="mb-3" controlId="registerName">
                        <Form.Label>NOME</Form.Label>
                        <Form.Control type="text" 
                            placeholder="Insira seu nome completo" 
                            value={name}
                            onChange={handleInputChange}
                        />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="registerEmail">
                        <Form.Label>E-MAIL</Form.Label>
                        <Form.Control type="email" 
                            placeholder="Insira seu endereço de e-mail" 
                            value={email}
                            onChange={handleInputChange} 
                        />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="registerPassword">
                        <Form.Label>SENHA</Form.Label>
                        <Form.Control type="password" 
                            placeholder="Digite a senha" 
                            value={password}
                            onChange={handleInputChange}
                        />
                         <Form.Text className="text-muted">
                         Sua senha deve ter de 8 a 20 caracteres, conter letras, números e caracteres especiais e não deve conter espaços ou emoji.
                        </Form.Text>
                        </Form.Group>

                        <Button className="mb-2 w-100 fw-bold" 
                            variant="primary" 
                            onClick={handleClick}
                            disabled={isButtonDisabled}
                        >
                        AVANÇAR
                        </Button>

                    </Form>
                    </Stack>
                </Container>
            </div>
            
        </>
    )
}

export default Register;