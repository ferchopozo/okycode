import { StyleSheet, Dimensions } from 'react-native'
import { SignupError, SignupTitle } from '../../../core/style/globalColor'

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
    errorStyle : {
        color: SignupError
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
        color: SignupTitle,
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    },
})