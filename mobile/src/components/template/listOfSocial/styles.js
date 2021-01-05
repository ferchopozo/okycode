import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import { ListOfSocialBorder,
         ListOfSocialItem } from '../../../core/style/globalColor'
export const Styles = StyleSheet.create({
    socialNetwork: {
        borderBottomWidth: 0,
        borderColor: ListOfSocialBorder,
    },
    socialIcon: {
         paddingRight: 10,
         paddingLeft: 15
    },
    socialText: {
        color: 'white',
        fontSize: 16
   },
   socialItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderBottomWidth: 1,
        borderColor:'white',
        backgroundColor: ListOfSocialItem
    },
})