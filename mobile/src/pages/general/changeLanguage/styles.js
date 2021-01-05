import React from 'react'
import { StyleSheet } from 'react-native'
import { ChangeLanguageHeader,
         ChangeLanguageSubTitle } from '../../../core/style/globalColor'

export const Styles = StyleSheet.create({
    header: {
       flex: 0.3,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'flex-start',
       backgroundColor: ChangeLanguageHeader,
       paddingLeft: '5%',
       paddingRight: '5%'
    },
    body: {
        flex: 1,  
        paddingLeft:'5%',
        paddingRight:'5%',
        paddingTop: '10%',
        backgroundColor: 'white'
    },
    slogan:{
      position: "absolute",
      backgroundColor: 'transparent',
      alignItems: 'center',
      bottom: '0%',
      height: 140,
      width: '100%',
      paddingTop: 20
    },
    subtitle: {
      paddingTop: 5,
      fontSize: 16,  
      width: '80%',
      color: ChangeLanguageSubTitle
    },
    description: {
       color: 'black',
       fontSize: 16,
       paddingBottom: '5%',
       textAlign: 'justify'
    },
    label: { 
      width: '100%',
      color: 'black',
      marginTop: 10,
      paddingBottom: '5%',
    },
    images: {
       flexDirection: 'row'
    },
    itemImage: { 
       width: 50,
      height: 50,
      resizeMode: 'contain',
      marginRight: 10 
   }
})