import react, { useState, useEffect } from 'react'
import { Col, Row, Card } from 'reactstrap'
import { GrCertificate } from 'react-icons/gr'
import {MdOutlineCloudUpload,MdOutlineGroups,MdFavoriteBorder} from 'react-icons/md'
import Foto from '../../../assets/julio_akatsuki.jpeg'
export const MappingDataUsersList = ({ nome, fotoPerfil, nomeArtigo, key }) => {
    return (

        <Col md="4" >
            <Card style={{
                margin: '1em',
                border: '2px solid black'
            }}>
                <div style={{ display: 'flex' }}>
                    <img src={Foto}
                        style={{
                            border: '2px solid white',
                            borderRadius: '10px',
                            width: '3.5em',
                            marginBottom: '0.5em',
                            height: '5em'
                        }}
                    />
                    <label >
                        <label>
                            <p> Pinturas fodas com julio</p>
                            <p>Julio Cesar</p>
                        </label>
                    </label>
                </div>
                <div>

                </div>
                <div >
                    <Row
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0em',
                            margin: "0em"

                        }}
                    >
                        <Col md={6}
                            style={{
                                display: 'grid',
                                justifyContent: 'center',
                                border: '2px solid black',
                                alignItems: 'center'
                            }}>
                            <GrCertificate size={65} color='#0000009e' />
                            Ver Perfil
                        </Col>
                        <Col md={6}
                            style={{
                                display: 'grid',
                                justifyContent: 'center',
                                border: '2px solid black',
                                alignItems: 'center'
                            }}>
                            <MdOutlineCloudUpload size={65} color='#0000009e' />
                            Item Enviado
                        </Col>
                    </Row>
                    <Row
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0em',
                            margin: "0em"
                        }}
                    >
                        <Col md={6}
                            style={{
                                display: 'grid',
                                justifyContent: 'center',
                                border: '2px solid black',
                                alignItems: 'center'
                            }}>
                            <MdOutlineGroups size={65} color='#0000009e' />
                            Participantes
                        </Col>
                        <Col md={6}
                            style={{
                                display: 'grid',
                                justifyContent: 'center',
                                border: '2px solid black',
                                alignItems: 'center'
                            }}>
                            <MdFavoriteBorder size={65} color='#0000009e' />
                            Favoritar
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
    )
}