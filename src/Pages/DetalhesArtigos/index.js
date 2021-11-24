import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Input } from 'reactstrap'
import SideBar from '../../compoments/sidebar'
import { GrSettingsOption } from 'react-icons/gr'
import { FaBars } from 'react-icons/fa'
import JulioOBrabo from '../../assets/julio_akatsuki.jpeg'
import { MdOutlineFavoriteBorder, MdOutlineShare, MdAddCircleOutline } from 'react-icons/md'
import { MenuItem, SubMenu, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
export default function DetailsArtigo() {
    const { id_artigo } = useParams()
    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);
    const palavresChave = ['Jogo', 'Tecnologia', 'Programacao']
    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };
    const texto = `
Existem três tipos de câmera disponíveis em The Witcher. Duas em perspectiva de cima, onde o mouse é usado para controlar tudo, e uma câmera por trás do ombro, que traz o jogador mais perto do sistema de combate, mas limita a visibilidade. Nas três câmeras, os controles podem ser modificados para serem focados no mouse ou combinados em teclado e mouse.

O sistema de combate em The Witcher representa uma experiência diferente em relação à maior parte dos RPGs. O jogador pode escolher entre três estilos de luta diferentes para serem usados em diferentes situações e contra diferentes inimigos. O estilo rápido permite ataques rápidos, porém menos poderosos, com maiores chances de acertar inimigos rápidos; o estilo forte causa mais dano aos inimigos em troca de uma diminuição na velocidade de ataque, e uma chance menor de acertar inimigos rápidos; e o estilo grupo permite ataques alternados, útil quando Geralt estiver cercado.[3] O jogador pode trocar entre os estilos de luta a qualquer momento. As duas espadas principais de Geralt também têm sistemas de combate diferentes, e servem para diferentes propósitos. A espada de aço é usada para lutar contra humanos e outras criaturas de carne e osso, enquanto a espada de prata é mais efetiva contra monstros e bestas sobrenaturais. O jogador pode, com sincronismo preciso, encadear os ataques de Geralt em combos para causar mais dano a inimigos.

A alquimia é uma parte importante na jogabilidade. O jogador pode criar poções que aumentam a vida ou melhoram a regeneração, permitem que Geralt veja no escuro, ou concedem outros benefícios. As receitas dessas poções podem ser aprendidas por meio de pergaminhos ou experimentação. Uma vez que o jogador crie uma poção desconhecida e decida bebê-la, ela poderá envenenar ou causar outros efeitos negativos em Geralt. Cada vez que Geralt bebe uma poção, o nível de toxicidade no corpo aumentará. Isso pode ser reduzido bebendo uma poção especial ou meditando em uma pousada ou lareira. Além de poções, o jogador também pode criar óleos usados para aumentar o dano por armas e bombas no combate. Nenhum dos dois pode ser criado até que pontos de talento sejam alocados nas habilidades correspondentes.

Um sistema de decisão-consequência com atraso quer dizer que as consequências das decisões de jogadores poderão aparecer em atos posteriores do jogo. Isso faz com que os jogadores pensem de forma crítica antes de tomar qualquer decisão, além de permitir ao jogo ter um sistema único de valor replay, já que as consequências resultantes das decisões do jogador podem levar a eventos diferentes no futuro, e, por fim, uma experiência de jogo diferente a cada jogada.

A natureza das opções enfrentadas ao jogar raramente caem no típico sistema de moralidade "preto e branco", presente em vários RPGs, e os jogadores, por vezes, encontram-se escolhendo entre a melhor opção de duas opções ruins. Em vez de fazer uma escolha clara entre o bem e o mal, o jogo apresenta situações mais reflexivas da moralidade real.[4]
`

    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    const Menu = () => {
        return (
            <>
                <MenuItem icon={<MdOutlineFavoriteBorder />}>Favoritos </MenuItem>
                <MenuItem
                    icon={<MdOutlineShare />}
                >
                    Compartilhar
                </MenuItem>
                <MenuItem icon={<MdAddCircleOutline />}>  Seguir </MenuItem>
            </>
        )
    }
    const MenuFooter = () => {
        return (
            <div
                className="sidebar-btn-wrapper"
                style={{
                    padding: '10px 14px',
                }}
            >
                <a
                    href="https://github.com/azouaoui-med/react-pro-sidebar"
                    target="_blank"
                    className="sidebar-btn"
                    rel="noopener noreferrer"
                >

                    <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        Logar
                    </span>
                </a>
            </div>
        )
    }
    return (
        <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>

            <SideBar
                image={image}
                collapsed={collapsed}
                rtl={rtl}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                imgPerfilMenuSide={true}
                imgSideBar={JulioOBrabo}
                ListMenuSide={Menu}
                nameUser={"Julio Cesar Oliveira"}
                MenuFooter={MenuFooter}
            />

            <main>


                <Row className="pt-3 pb-2" id="headerMenu" style={{
                    background: '#0c1e35',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: "center"
                }} >
                    <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                        <FaBars />
                    </div>
                    <Col lg="2" className="mr-2 "></Col>
                    <Col lg="6" className="mr-2 " style={{
                        marginTop: '-1px'
                    }}>

                        <label className="m-2 " style={{ cursor: 'pointer' }}>

                            <div style={{ display: 'flex' }}>
                                <img src={JulioOBrabo}
                                    style={{
                                        border: '2px solid white',
                                        borderRadius: '10px',

                                        marginBottom: '0.5em',
                                        height: '3em'
                                    }}
                                />
                                <label >

                                    <p style={{
                                        fontWeight: 'bold'
                                    }}> Pinturas fodas com julio</p>
                                    <p style={
                                        {
                                            fontSize: '0.5em',
                                            marginTop: '-18px'
                                        }
                                    }>Julio Cesar</p>
                                  <p style={
                                        {
                                            fontSize: '0.8em',
                                            marginTop: '-18px'
                                        }
                                    }>  #Palavras-Chaves:
                                    {palavresChave.map((key, index) => {
                                        if (index < 2)
                                            return `${key},`
                                        else{
                                            return `${key}.`
                                        }
                                    })}
                                    </p>
                                </label>
                            </div>
                        </label>
                        <label className="" style={{ cursor: 'pointer' }}>

                        </label>
                    </Col>

                    <Col lg="3"  >

                    </Col>

                </Row>
                <Row id="artigos-details">

                    {texto}
                </Row>

            </main>

        </div>
    )
}