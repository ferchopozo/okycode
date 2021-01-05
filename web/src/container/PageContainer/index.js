import React from "react"
import { Header } from '../../components/Template/Header'
import { Footer } from '../../components/Template/Footer'
import { Menu } from '../../container/Menu'
import { GlobalStyles } from '../../style/GlobalStyles'
import { itemMenuEnglish , itemMenuSpanish } from '../../data'
import { Languages } from '../../core/enviorment/Constants'
import SEO from '../../components/seo'

export const PageContainer = ({ children, activeMenu = 1, title, description, lang }) => {
  const data = lang === Languages.Spanish? itemMenuSpanish: itemMenuEnglish 
  return (
           <>
            <GlobalStyles /> 
            <SEO title={title} description={description} lang={lang}    />
            <Header lang={lang} >
                <Menu data={data} activeMenu = { activeMenu }  />  
            </Header>
            { children }
            <Footer data={data} lang={lang} />
          </>)
}

