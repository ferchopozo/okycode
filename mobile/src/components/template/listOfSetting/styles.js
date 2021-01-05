import { StyleSheet } from 'react-native'
import { ListOfSettingColor,
         ListOfSettingItem,
         ListOfSettingText } from '../../../core/style/globalColor'

export const Styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
        borderColor: '#4c4c4d',
        borderColor: 'red',
        backgroundColor: ListOfSettingColor
    },
    title: {
        color: 'white',
        fontWeight: '400',
        fontSize: 16,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: 5
    },
    icon: {
         paddingRight: 10,
         paddingLeft: 15
    },
    itemText: {
        color: 'black',
        fontSize: 16,
        flex:1
   },
   item: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderColor:'white',
        backgroundColor: ListOfSettingItem
    },
    itemTextDisabled: {
        color: ListOfSettingText,
        fontSize: 16,
        flex:1
   },
})