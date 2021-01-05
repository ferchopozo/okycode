import React from 'react'
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    container:{
       position: 'relative',
       top: 0,
       flex:1
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: .30,
    },
    body: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flex: .45,
      margin: '2%',
    },
    footer: {
      flex: .2,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
   
})