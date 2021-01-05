import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { Layout } from '../../components/template/layout'
import { ContactHeader } from '../../components/template/contactHeader'
import { GetInTouch } from '../../components/template/getInTouch'
import { ListOfSocial } from '../../components/template/listOfSocial'
import { Logo } from '../../components/template/logo'

import { ContantToolbar } from '../../core/envrioment/constants'
import { BackgroundContact } from '../../core/style/globalColor'

import { Styles } from './styles'


export const ContactUs = () => {
  const company = useSelector(state => state.company)
   return (
    <Layout page={ContantToolbar.Contact} backgroundColor={BackgroundContact} 
                                          navigatorColor = {BackgroundContact}>
           <View style={Styles.header}>
              <ContactHeader item={company} />
           </View>
           <GetInTouch item={company} />
           <View style={Styles.services}>
                <ListOfSocial item = {company} />
                <View style={{height:100}}></View>
           </View>
           <View style={Styles.slogan}>
               <Logo width={120} height={40}  />
           </View>
    </Layout>
  )
}
