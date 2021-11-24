import React,{useState} from 'react'
import { Row, Col, Card ,Input,Form,FormGroup,Label} from 'reactstrap'
import FundoBG from '../../assets/fundotop.jpg'
export default function Login() {
    const [senha,setSenha]=useState("")
    const [email,setEmail]=useState("")
    return (
        <Row
            style={{
                height: '100vh',
                background: `url("${FundoBG}")`,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Col md={6} lg={4}>
                <Card body>
                    <Form  >

                        <div className="text-center pb-4">
                            <img
                                src="http://www.camboriu.ifc.edu.br/wp-content/themes/ifc-v2/assets/images/logo-ifc.png"
                                className="rounded"
                                style={{ width: 200 }}
                                alt="logo"
                            />
                        </div>

                        <FormGroup>
                            <Label for='Email'>Email</Label>
                            <Input type='text'
                                placeholder='Email'
                                onChange={e => {

                                    setEmail(
                                        e.target.value
                                    )
                                }} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='senha inserida no cadastro'>Senha </Label>
                            <Input type='password'
                                placeholder='Sua Senha' onChange={e => {
                                    setSenha(
                                        e.target.value
                                    )
                                }} />
                        </FormGroup>
                        <Input
                            size="lg"
                            className="btn-primary"
                            style={{ color: "white" }}
                            block

                            value="Logar"
                            type="submit"
                        /><br />

                        <FormGroup style={{ textAlign: 'left' }}>

                            <a href="/modalidade1">Nao Possuo cadastro</a><br />
                        </FormGroup>
                      
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}