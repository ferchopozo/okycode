import React, { useEffect, useState } from 'react'
import { Languages } from '../../../core/enviorment/Constants'
import { Logo } from '../Logo'


export const Header = ({ children, lang = Languages.Spanish }) => {
  const sizeMenu = 70
  const [isStaticMenu, setStaticMenu] = useState(false)
  const getLogoPath = () => {
    switch (lang) {
      case Languages.Spanish:
        return "/"
      default:
        return "/en"
    }
  }

  const handleScroll = () => {
    const currentScrollY = window.pageYOffset

    if (currentScrollY > sizeMenu) {
      setStaticMenu(true)
    } else {
      setStaticMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <header className={!isStaticMenu ? 'header' : 'header-static'}>
      <div className="p-grid" style={{width: '100%', height: '100%'}}>
         <div className="p-col-3 p-col-align-center">
            <Logo path={getLogoPath()} />
         </div>
         <div className="p-col-9 p-col-align-center" style={{display: 'flex', justifyContent: 'flex-end'}}>
            {children}
         </div>
      </div>
    </header>)
}
