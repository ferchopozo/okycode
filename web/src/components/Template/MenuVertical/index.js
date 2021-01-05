import React from 'react'
import {
    StaticMenu,
    IconMenu,
  } from './styles'

export const MenuVertical = ({children, isVisibleMenu, handleStaticMenu, handleHideMenu})=>{
    return(
        <div className='navigatorMobile'>
            <StaticMenu visible={isVisibleMenu} position='right'
                        closeOnEscape={true}
                        dismissable={false}
                        onHide={handleHideMenu}
                        baseZIndex={100000}
                        modal={false}>
                <div className='divNavigatorMobile' >
                    {children}
                </div>
            </StaticMenu>
            <IconMenu size='22' onClick={handleStaticMenu} />
       </div>
    )
}