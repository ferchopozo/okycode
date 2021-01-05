import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        
    },
    navigator: {
        height: 50
    },
    body:{
       position: 'relative',
       top: 0,
       flex:1,
    },
    toolbar: {
        position: 'absolute',
        bottom:0,
     },
})