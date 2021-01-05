import React from 'react'
import { View,
         Text,
         TouchableOpacity,
         FlatList
    } from 'react-native'
import { Icon } from 'react-native-elements'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

import { Styles } from './styles'
import { TypeEnabledSettings } from '../../../core/envrioment/constants'

export const ListOfSetting = ({title, data, user}) =>{
    const { t } = useTranslation()
    const navigation = useNavigation()
    const getTypeDisabled = (item)=>{
        let disabled = false

        switch (item.typeEnabled) {
            case TypeEnabledSettings.AlwaysVisible:
                    disabled = false
                break;
            case TypeEnabledSettings.SigninUser:
                    disabled = user? true: false
                break;
            case TypeEnabledSettings.UserNotRegister:
                    disabled = user? false: true
                    break;
        }

        return disabled
    }
    const renderItem = (item) => {
        let disabled = getTypeDisabled(item)
        return (!disabled && <TouchableOpacity style={Styles.item} onPress={()=>handleClickItem(item.menu)} disabled={disabled}  >
                                 <Icon name={item.mobileIcon} type={item.typeicon} color={!disabled?'#2f7722':'silver'}  size={18} style={Styles.icon} />
                                 <Text style={!disabled?Styles.itemText:Styles.itemTextDisabled}>{t(item.name)}</Text>
                                 <Icon name={'chevron-right'} type='font-awesome' color='#a6a6a6'  size={12} style={Styles.icon} />
                            </TouchableOpacity>)
    }
    const handleClickItem = (menu)=>{
        navigation.navigate(menu)
    }

    return  <View style={Styles.container}>
                <Text style={Styles.title} >{t(title)}</Text>
                <FlatList data={data}
                          scrollEnabled = {false}
                          keyExtractor = { (item, index) => index.toString() }
                          scrollEnabled = {false}
                          renderItem = {({item})=>renderItem(item)}
                />        
            </View>
}