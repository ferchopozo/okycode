import React from 'react'
import { View, 
        Text,
        ScrollView,
        Dimensions } from  'react-native'
import { Layout } from '../../components/template/layout'
import { Image } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Styles } from './style'
import { BackgroundService } from '../../core/style/globalColor'
import { ContantToolbar } from '../../core/envrioment/constants'
import { Header } from '../../components/template/header'
import { Body } from '../../components/template/body'

export const Service = ()=>{
    const { t } = useTranslation()
    const service = useSelector(state => state.service)
    const windowHeight = Dimensions.get('window').height;
    
    return(
        <Layout page={ ContantToolbar.Home } backgroundColor={BackgroundService} navigatorColor={BackgroundService}>
             <ScrollView style={{flex: 1}}>
                <Header title={t(service.title)} backgroundColor='transparent' height={windowHeight*.1} />
                <Body marginleft={0} marginRight={0} flex={1}>
                    <View style={Styles.headerImage}>
                        <Image source={{ uri: service.imageHeader }} style={Styles.image}  />
                    </View>
                    <View style={Styles.description}>
                        <Text style={{textAlign: 'justify'}}>{t(service.description)}</Text>
                    </View>
                    <View style={{height:100}} >
                    </View>
                </Body>
            </ScrollView>
        </Layout>
    )
}