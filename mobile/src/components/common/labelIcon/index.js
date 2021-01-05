import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

import { Styles } from './styles'

export const LabelIcon = ({icon='heartbeat',name='',label=''}) => {
    return <View style={Styles.Container}>
               <View style={Styles.Icon}>
                  <Icon name={icon} type='font-awesome' color='#517fa4' size={18} />
               </View>
               <View style={Styles.Name}>
                  <Text style={Styles.TextName} >{name}</Text>
               </View>
               <View style={Styles.Description}>
                   <Text style={Styles.TextDescription}>{label}</Text>
               </View>
           </View>
}