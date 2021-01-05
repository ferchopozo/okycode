import { StyleSheet } from 'react-native'
import { ListOfPaymentBorder,
         ListOfPaymentColor,
         ListOfPaymentItem } from '../../../core/style/globalColor'

export const Styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
        borderColor: ListOfPaymentBorder,
        backgroundColor: ListOfPaymentColor,
        marginTop: 10
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
        height: 100,
        borderBottomWidth: 1,
        borderColor:'white',
        backgroundColor: ListOfPaymentItem
    },
})