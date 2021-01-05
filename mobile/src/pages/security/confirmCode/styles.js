import { StyleSheet, Dimensions } from 'react-native'
import { ConfirmCodeError,
         ConfirmCodeTitle } from '../../../core/style/globalColor'

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
        color: ConfirmCodeError
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
        color: ConfirmCodeTitle,
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    },
})