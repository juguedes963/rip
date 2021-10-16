import React, { useState } from 'react'
import { Input, Row, Col } from 'reactstrap'
import { MdFavoriteBorder, MdOutlineGroups } from 'react-icons/md'
import { GiHeavyCollar } from 'react-icons/gi'
import {GrSettingsOption} from 'react-icons/gr'
import { FaGem, FaHeart, FaRegLaughWink, FaList, FaBars, FaTachometerAlt, FaNetworkWired } from 'react-icons/fa'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import JulioOBrabo from '../../assets/julio_akatsuki.jpeg'
import { ListArtigos } from '../../compoments/Artigos'
function Aside({ image, collapsed, rtl, toggled, handleToggleSidebar }) {

    return (
        <>

            <ProSidebar
                image={image ? "" : false}
                rtl={rtl}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            marginLeft: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontFamily: 'none',
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            paddingTop: '1.1em'
                        }}
                    >
                        <h2>RIP</h2>

                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu style={{
                        display: 'flex', justifyContent: 'center'
                    }}>
                        <img src={JulioOBrabo}

                            style={{
                                border: '2px solid white',
                                borderRadius: '20px',
                                width: '4.5em',
                                marginBottom: '0.5em',
                                height: '5em'
                            }} />
                        <p>
                            Julio Cesar
                        </p>
                    </Menu>
                    <Menu iconShape="circle">

                        <MenuItem icon={<MdFavoriteBorder />}>Favoritos </MenuItem>
                        <MenuItem
                            icon={<GiHeavyCollar />}
                        >
                            Contribuições
                        </MenuItem>
                        <MenuItem icon={<FaNetworkWired />}>Conexões </MenuItem>
                        <MenuItem icon={<MdOutlineGroups />}>Grupos </MenuItem>
                    </Menu>

                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '10px 14px',
                        }}
                    > <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                Novo Projeto
                            </span>
                        </a>
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >

                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                Sair
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}
export default function Layout({ setLocale }) {
    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };


    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>

            <Aside
                image={image}
                collapsed={collapsed}
                rtl={rtl}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
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
                    <Col lg="2" className="mr-2 "><Input className="ml-1" /></Col>
                    <Col lg="5" className="mr-2 ">
                        <label className="m-2 " style={{ cursor: 'pointer' }}> Artigos em Alta</label>
                        <label className="m-2" style={{ cursor: 'pointer' }}>Categorias</label>
                        <label className="m-2" style={{ cursor: 'pointer' }}>Baseados Nos meus Favoritos</label>
                    </Col>

                    <Col lg="4"  >
                        <label className="m-2 " style={{ cursor: 'pointer' }}> <GrSettingsOption  color="#FFF" size={15}/> Configuracoes</label>
                        <label className="m-2 " style={{ cursor: 'pointer' }}> Repository Integration Projection</label>
                    </Col>

                </Row>
                <Row id="artigos-list">

                    <ListArtigos />
                </Row>
            </main>

        </div>
    );
}