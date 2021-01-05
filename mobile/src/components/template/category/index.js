import React from 'react'
import { Text, TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { CategorySelected } from '../../../core/redux/action.types'
import { Styles } from './style'

export const Category = ({ text, icon='ios-checkmark', typeIcon='ionicon', width, color, data})=>{
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const HandleOnPress = ()=>{
        navigation.navigate('category')
        dispatch({type: CategorySelected, payload:data })  
    }

    return(
        <TouchableOpacity style={[Styles.container, {borderColor:color}]} activeOpacity={0.5} onPress={HandleOnPress}> 
                <Icon name={icon} type={typeIcon} size={21} color={color}  style={Styles.icon} solid />
                <Text style={[Styles.text, {color:color}]} >{ text }</Text>
        </TouchableOpacity>
    )
}