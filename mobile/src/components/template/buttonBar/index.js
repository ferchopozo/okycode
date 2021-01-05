import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient'

import { Styles } from './style'
import { ButtonGradientBase,
         ButtonGradientBlack } from '../../../core/style/globalColor'

export const ButtonBar = ({text,icon,typeIcon,width,selected = false,size = 18, handleOnPress=null})=>{
    let colorGradient = selected ?[ButtonGradientBase, '#000000']:[ButtonGradientBlack, '#000000']
    return(
            <LinearGradient colors={colorGradient}  
                            style={[Styles.container,{width: width}]} 
                            onPress={handleOnPress} >
                <TouchableOpacity onPress={handleOnPress}>
                    <Icon name={icon} type={typeIcon} color='#ffffff' size={size}  />
                    <Text style={Styles.text}>{text}</Text>
                </TouchableOpacity>
            </LinearGradient>
    )
}