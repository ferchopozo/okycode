import React from 'react'
import {View, Text} from 'react-native'
import { useTranslation } from 'react-i18next'

export const Loading = ({color='black'})=>{
    const { t } = useTranslation()

    return (<View>
                <Text style={{color:color}} >{t('app.loading.information')}</Text>
            </View>)
}