import React from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width

export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 12,
        paddingLeft: 5,
        paddingRight: 5,
        height: 60,
        width: windowWidth*0.75,
        
        borderWidth: 1,
        borderRadius: 45
    },
    icon: {
      
    },
    text: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '300',
        paddingTop: 3
    }
})