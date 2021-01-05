import { StyleSheet } from 'react-native'
import { PickerLanguageLabel,
         PickerLanguageTitle,
         PickerLanguageLine } from '../../../core/style/globalColor'

export const Styles = StyleSheet.create({
    container: {
       paddingLeft: 10,
       paddingRight: 10
    },
    label : {
         color: PickerLanguageLabel,
         borderTopWidth:1,
         borderTopColor: PickerLanguageLine,
         borderBottomWidth:1,
         borderBottomColor: PickerLanguageLine,
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
        color: PickerLanguageTitle,
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    }
})