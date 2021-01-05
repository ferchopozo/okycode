import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { View,
         Dimensions,
         Text, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ContantToolbar } from '../../core/envrioment/constants'
import { Layout } from '../../components/template/layout'
import { Header } from '../../components/template/header'
import { Body } from '../../components/template/body'
import { ListOfSetting } from '../../components/template/listOfSetting'

import { GeneralSettingData as itemsGeneral, 
         ClientSettingData as clientData } from '../../core/data'
import { Styles } from './styles'

export const More = ()=>{
    const { t } = useTranslation()
    const user = useSelector(state => state.security)
    const windowHeight = Dimensions.get('window').height
    const getSubtitle = () => {
        let returnMessage = `${t('more.general.unidentified')}`

        if(user){
            returnMessage = `${t('hello')} ${user.attributes['custom:name']}`
        }

        return returnMessage
    }

    return (
        <Layout page={ ContantToolbar.More } backgroundColor='white' navigatorColor={'white'} >
            <Header title={t('menu.more.title')} height={windowHeight*.1} >
                 <Text style={Styles.subTitle}>{getSubtitle()}</Text>
             </Header> 
             <Body marginTop={10} flex={.9} marginleft={'0%'} marginRight={'0%'} >
                 <ScrollView>
                   
                        <ListOfSetting title={'more.general.setting'} data={itemsGeneral} user={user} />
                   
                         <ListOfSetting title={'more.general.client'}  data={clientData}   user={user}  />
                    
                    <View style = {{ height: 100, backgroundColor: 'transparent'}} />
                </ScrollView>   
            </Body>
        </Layout>
    )
}