import React from 'react'
import { StyleSheet } from 'react-native'
import { AboutUsHeader,
         AboutUsBody } from '../../core/style/globalColor'

export const Styles = StyleSheet.create({
    header: {
       flex: 0.3,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'flex-start',
       backgroundColor: AboutUsHeader,
       paddingLeft: '5%',
       paddingRight: '5%'
    },
    body: {
        flex: 1,  
        paddingLeft:'5%',
        paddingRight:'5%',
        paddingTop: '10%',
        backgroundColor: AboutUsBody
    },
    slogan:{
      position: "absolute",
      backgroundColor: 'transparent',
      alignItems: 'center',
      bottom: '0%',
      height: 120,
      width: '100%',
      paddingTop: 20
    },
    hello: {
       fontWeight: '500',
       fontSize: 24,
       color: 'white',
       textAlign: 'left',
       width: '100%',
       flex:1,
    },
    subtitle: {
      paddingTop: 5,
      fontSize: 16,  
      width: '80%'
    },
    description: {
       color: 'white',
       fontSize: 16,
       paddingBottom: '5%',
       textAlign: 'justify'
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