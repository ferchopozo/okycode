import React, { useState } from 'react'
import { ScrollView, View, Text, Dimensions } from 'react-native'
import { useTranslation } from 'react-i18next'

import { Layout } from '../../../components/template/layout'
import { Header } from '../../../components/template/header'
import { Provider } from '../../../components/template/provider'
import { PickerLanguage } from '../../../components/template/pickerLanguage'
import { Styles } from  './styles'
import { ContantToolbar } from '../../../core/envrioment/constants'
import i18n from 'i18next'

export const  ChangeLanguage = ()=>{
    const windowHeight = Dimensions.get('window').height;
    const { t } = useTranslation()
    const onPickerLanguage = (value) => {
        i18n.changeLanguage(value)
    }

    return(
       <Layout page={ ContantToolbar.More } backgroundColor={'white'} navigatorColor={'white'} >
           <Header title={t('change.language.title')} backgroundColor={'white'} height={windowHeight*.11}>     
                 <Text style={Styles.subtitle}>{t('change.language.description')}</Text>
           </Header>
           <View style={Styles.body}>
            <ScrollView >
                <Text style={Styles.description}>
                    {t('change.language.screen.description')}
                </Text>
                <PickerLanguage title='Language' onPickerLanguage={onPickerLanguage} />
                <View style={{height:200}}>
                </View>
            </ScrollView>
           </View>
           <View style={Styles.slogan}>
                 <Provider width={94} height={41}  />
           </View>       
       </Layout>
    )
}