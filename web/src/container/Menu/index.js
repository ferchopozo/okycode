import React, 
     { useState, useEffect } from 'react'
import { MenuHorizontal } from '../../components/Template/MenuHorizontal'
import { MenuVertical } from '../../components/Template/MenuVertical'
import { LinkMenu } from '../../components/Template/LinkMenu'
import { LanguageSelect } from '../../components/Template/LanguageSelect' 

export const Menu = ({ data, activeMenu = 0 }) => {
  const handleStaticMenu = () => { setVisibleMenu(true) }
  const handleHideMenu = () => { setVisibleMenu(false) }
  const [ isVisibleMenu, setVisibleMenu ] = useState(false)
  const handleScroll = () => { setVisibleMenu(false) }

  const renderItems = () =>  {  return data.map((element, index) =>  {
                                let component = null
                              
                                switch (element.component) {
                                    case 'language':
                                        component = <LanguageSelect text={ element.menu } />
                                        break;
                                    default :
                                        component = <LinkMenu id={index} 
                                                              activate = { activeMenu === index? true: false } 
                                                              name={ element.menu } 
                                                              path={ element.path } />
                                       break;
                                }

                                return <div key={element.index} style={{padding: '0px 10px 0px 10px'}}>{component}</div>
                            })
                        }

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <MenuHorizontal>
        {renderItems()}
      </MenuHorizontal>
      <MenuVertical
                   isVisibleMenu={isVisibleMenu} 
                   handleStaticMenu={handleStaticMenu} 
                   handleHideMenu={handleHideMenu} >
          {renderItems()}
      </MenuVertical>
   </>
  )
}

