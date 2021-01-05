import { StyleSheet, Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height;
export const Styles = StyleSheet.create({
    header: {
        height: (windowHeight * .1),
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    headerImage: {
        height: (windowHeight * .15),
        marginLeft: 2,
        marginRight: 2,
    },
    headerText:{
        color: 'black',
        fontSize: 26,
        fontWeight: '300'
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 0,
    },
    bodyRectangle: {
       flex: .2
    },
    bodyText: {
        flex:1,
    },
    rectangle: {
        marginLeft:'70%',
        width: 8,
        height: 30
    },
    services: {
      flex: 1,
    },
    textService: {
        marginLeft: 10,
        fontWeight: '400',
        marginTop: 10,
        marginBottom: 10
    }
})