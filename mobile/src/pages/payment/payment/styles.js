import { StyleSheet } from 'react-native'
import { PaymentTitle,
         PaymentError } from '../../../core/style/globalColor'

export const Styles = StyleSheet.create({
    errorStyle : {
        color: PaymentError
    },
    titleStyle: {
        fontWeight: "bold",
        color: PaymentTitle,
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    },
})