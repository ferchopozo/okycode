import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Styles } from './style'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { ServiceSelected } from '../../../core/redux/action.types'
import { Loading } from '../../../components/template/loading'

export const ListOfService = ({items, loading})=>{
    const { t } = useTranslation()
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const typeIcon = 'font-awesome'
    const HandlePress = (item)=>{
        navigation.navigate('service')
        dispatch({type: ServiceSelected, payload:item })  
    }

    return !loading?(
      <View style={Styles.container}>
        <FlatList data={items}
                  keyExtractor = { (item, index) => index.toString() }
                  scrollEnabled = {false}
                  renderItem={({item})=>{
                    return (  
                      <TouchableOpacity onPress={()=>(HandlePress(item))}  style={Styles.containerItem}>
                          <Icon name={item.mobileIcon} size={16} type={typeIcon} color='#3f4040' style={Styles.icon} />
                          <Text style={Styles.text}>{t(item.title)}</Text>
                          <View style={Styles.iconRight}>
                             <Icon name={'chevron-right'} size={12} type={'font-awesome'} color='#2584a7'  />
                          </View>
                      </TouchableOpacity>
                    )
                  }} />  
      </View>  
    ):<Loading color='black' />
}