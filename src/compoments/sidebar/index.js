import React, { useState } from 'react'
import { FaGem, FaHeart, FaRegLaughWink, FaList, FaBars, FaTachometerAlt, FaNetworkWired } from 'react-icons/fa'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
export default function Aside({
    image,
    collapsed,
    rtl,
    toggled,
    handleToggleSidebar,
    imgPerfilMenuSide,
    ListMenuSide,
    imgSideBar,
    nameUser,
    MenuFooter
}) {

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
                        {imgPerfilMenuSide ? (<>
                        </>) : (<>
                            <img src={imgSideBar}

                                style={{
                                    border: '2px solid white',
                                    borderRadius: '20px',
                                    width: '4.5em',
                                    marginBottom: '0.5em',
                                    height: '5em'
                                }} />
                            <p>
                                {nameUser}
                            </p>
                        </>)}

                    </Menu>
                    <Menu iconShape="circle">
                        <ListMenuSide />
                    </Menu>

                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <MenuFooter/>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}