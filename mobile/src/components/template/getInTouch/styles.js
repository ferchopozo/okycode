import { StyleSheet,
         Dimensions } from 'react-native'

import { GetInTouchIcon,
         GetInTouchText } from '../../../core/style/globalColor'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export const Styles = StyleSheet.create({
    rectangle: {
        borderWidth: 0,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: '3%',
        paddingBottom:'2%',
        height: (windowHeight * .2),
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    rectangleItem: {
        width: (windowWidth * 0.20),
        justifyContent: 'center',
        alignItems: 'center'
    },
     iconItem:{
      width: (windowWidth * 0.15),
      height: (windowWidth * 0.15),
      borderRadius: (windowWidth * 0.15)/2,
      justifyContent: 'center',
      backgroundColor: GetInTouchIcon
    },
    textItem:{
        marginTop: 3,
        width: (windowWidth * 0.2),
        fontSize: 12,
        textAlign: 'center',
        color: GetInTouchText,
        fontWeight: '400',
    },
    legendGetInTouch :{
        marginLeft: 20,
        marginRight: 20,
    }
})