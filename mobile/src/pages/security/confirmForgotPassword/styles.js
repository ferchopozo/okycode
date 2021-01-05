import { StyleSheet, Dimensions } from 'react-native'
import { ConfirmForgotError,
        ConfirmForgotTitle } from '../../../core/style/globalColor'

const windowHeight = Dimensions.get('window').height
export const Styles =StyleSheet.create({
    container: {
        //backgroundColor: '#ffe6e6',
        marginLeft: '2%',
        marginRight: '2%',
        height: windowHeight*.7,
        marginBottom: 5
    },
    containerButton: {
       marginTop: 40
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 0,
    },
    headerImage: {
        height: (windowHeight * .15),
        marginLeft: 2,
        marginRight: 2,
        marginBottom: '5%'
    },
    errorStyle : {
        color: ConfirmForgotError
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
        color: ConfirmForgotTitle,
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    },
})