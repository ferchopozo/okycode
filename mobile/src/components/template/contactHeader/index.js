import React, { useEffect} from 'react'
import { View,
         Text,
         Clipboard } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Icon } from 'react-native-elements'

import { Styles } from './style'

export const ContactHeader = ({ item } )=>{
    const { t } = useTranslation()
    const typeIcon = 'font-awesome'
    const renderAddress = ()=>{
        return item.localization.map((itemAddress, index)=>{
           return (<View key={index} style={Styles.subTitle}>
                      <Text style={Styles.subtitleText}>{itemAddress.adress}  </Text>
                      <Icon name='check' type={typeIcon} color='#41a330' size={10} style={{marginLeft:3, padding:6}} onPress={()=>{
                          Clipboard.setString(`${itemAddress.adress}`)
                          alert("Copied Address")
                      }} />
                    </View>
           )
        })
    }

    return <>
                <Text style={[Styles.headerText]}>{t('menu.contactus')}  <Text style={Styles.subtitleText}>{t(item.name)}</Text></Text>
                {renderAddress()}
           </>
}