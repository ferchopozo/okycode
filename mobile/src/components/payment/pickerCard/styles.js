import { StyleSheet } from 'react-native'
import { PickerCardLabel,
         PickerCardBorder,
         PickerCardTitle,
         PickderCardError } from '../../../core/style/globalColor'

export const Styles = StyleSheet.create({
    container: {
       paddingLeft: 10,
       paddingRight: 10
    },
    label : {
         color: PickerCardLabel,
         borderTopWidth:1,
         borderTopColor: PickerCardBorder,
         borderBottomWidth:1,
         borderBottomColor: PickerCardBorder,
         paddingTop: 15,
         paddingBottom: 15,
         paddingLeft: 10,
         paddingRight: 10,
    },
    containerPicker: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerPickerButton : {
        width: '100%',
        height: 50,
    },
    buttonPicker :{
        fontSize: 14
    },
    title: {
        fontWeight: "bold",
        color: PickerCardTitle,
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    },
    error: {
        fontWeight: "300",
        color: PickderCardError,
        fontSize: 14,
        paddingTop: 5
    },
    

})