import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import { ContactHeaderText,
         ContactSubTitleText,
         ContactItemText } from '../../core/style/globalColor' 

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export const Styles = StyleSheet.create({

    header: {
        height: (windowHeight * .15),
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '5%',  
    },
    services: {
        height: (windowHeight * .5),
    },
    slogan:{
        position: "absolute",
        backgroundColor: 'transparent',
        alignItems: 'center',
        bottom: '0%',
        height: 140,
        width: '100%',
        paddingTop: 20
      },
    
})