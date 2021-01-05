import React from 'react'
import { View, Text } from 'react-native'

import { Styles } from './styles'

export const Header = ({title,backgroundColor='transparent',children,height='auto'})=>{
    return (<View style={[Styles.header, { backgroundColor:backgroundColor, minHeight:height }]}>
                <Text style={Styles.title}>{title}</Text>
                {children}
            </View>)
}