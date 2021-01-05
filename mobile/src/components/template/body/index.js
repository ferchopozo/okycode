import React from 'react'
import { View } from 'react-native'

import { Styles } from './styles'

export const Body = ({ marginleft, marginTop, marginRight,
                       flex, minHeight, children,backgroundColor})=>{
    return <View style={[{ 
                           marginLeft: marginleft?marginleft: '5%',
                           marginTop: marginTop?marginTop:'0%',
                           marginRight: marginRight? marginRight: '5%',
                           flex: flex,
                           minHeight: minHeight, backgroundColor:backgroundColor }]}>
              {children}
           </View>
}