import { StyleSheet } from 'react-native'
import { ListOfServiceItem,
         ListOfServiceText,
         ListOfServiceLine } from '../../../core/style/globalColor'

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        borderColor: ListOfServiceLine,
        borderTopWidth:1,
        marginRight: 10
    },
    containerItem: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        borderColor: ListOfServiceItem,
        borderBottomWidth:1,
    },
    icon: {
        marginRight: 5,
        
    },
    iconRight: {
        flex:1,
        alignItems: 'flex-end',
        marginRight: 5
    },
    text:{
        color: ListOfServiceText
    }

})