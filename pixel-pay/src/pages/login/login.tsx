import { Stack, Container , Form, Button, Image} from 'react-bootstrap'
import './login.css'

function Login(){
    return (
        <>
           <div className="page-container">
                <Container className="login-container">
                    <Stack gap={4} className="align-items-center justify-content-center">
                    <Image className="login-logo" src="/img/pixel-logotipo.png" height={120} />
                    <h4 className="fw-bold">Conecte-se à sua Conta Pixel</h4>
                    <Form className="w-100">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-MAIL</Form.Label>
                        <Form.Control type="email" placeholder="Digite seu e-mail" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>SENHA</Form.Label>
                        <Form.Control type="password" placeholder="Digite a senha" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Lembrar-me" />
                        </Form.Group>

                        <Button className="mb-2 w-100 fw-bold" variant="primary" type="submit">
                        CONECTAR
                        </Button>

                        <Button className="mb-2 w-100 text-decoration-none" variant="link" type="submit">
                        Esqueceu sua senha?
                        </Button>

                        <Button className="w-100 fw-bold" variant="secondary" type="submit">
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