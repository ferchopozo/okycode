import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import { ContactHeaderText,
         ContactSubTitleText } from '../../../core/style/globalColor' 

export const Styles = StyleSheet.create({
    headerText:{
        color: ContactHeaderText,
        textAlign: 'left',
        marginTop: 15,
        marginBottom: 3,
        fontSize: 26,
        fontWeight: '500'
    },
    subTitle :{
        flexDirection: 'row', 
        justifyContent: "flex-start"
    },  
    subtitleText: {
        color: ContactSubTitleText,
        fontWeight: '400',
        textAlign: 'center',
        fontSize: 14
   },
  
})