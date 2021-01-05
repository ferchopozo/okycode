import { StyleSheet, Dimensions } from 'react-native'
import { ChangePasswordError,
         ChangePasswordTitle } from '../../../core/style/globalColor'

const windowHeight = Dimensions.get('window').height
export const Styles =StyleSheet.create({
    container: {
        marginLeft: '2%',
        marginRight: '2%',
        height: windowHeight*.7,
        marginBottom: 5
    },
    containerButton: {
       marginTop: 40
    },
    errorStyle : {
        color: ChangePasswordError
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
        color: ChangePasswordTitle,
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    },
})