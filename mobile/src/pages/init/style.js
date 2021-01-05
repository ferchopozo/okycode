import React from 'react'
import { StyleSheet } from 'react-native'

import { BackgroundInit } from '../../core/style/globalColor'

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: BackgroundInit,
        flex: 1,
        flexDirection: 'column',
    },
    containerLogo: {
        flex:0.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 55
    },
    containerFooter: {
        flex:0.2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10
    }
})