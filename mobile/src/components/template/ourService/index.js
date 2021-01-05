import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'

import { Styles } from './style'

export const OurService = ()=>{
    const { t } = useTranslation()

    return(
        <>
            <View style={Styles.container}>          
                <Text style={Styles.textTitle}> {t('app.ourservices')} </Text>
            </View>
        </>
    )
}

