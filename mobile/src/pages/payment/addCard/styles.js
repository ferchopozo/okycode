import { StyleSheet } from 'react-native'
import { AddCardError,
         AddCardTitle } from '../../../core/style/globalColor'

export const Styles = StyleSheet.create({
    containerNumeric : {
       display: "flex",
       flexDirection : "row"
    },
    containerShort: {
        width: '30%',
    },
    containerZipCode: {
        width: '50%',
    },
    errorStyle : {
        color: AddCardError
    },
    inputStyle: {
        borderWidth: .5,
        borderRadius : 10
    },
    leftIconStyle: {
        margin: 5
    },
    titleStyle: {
        fontWeight: "bold",
        color: AddCardTitle,
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    },
})