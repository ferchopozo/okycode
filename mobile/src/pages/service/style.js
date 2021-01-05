import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import { ServiceHeader } from '../../core/style/globalColor'

const windowHeight = Dimensions.get('window').height
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
    headerText:{
        color: ServiceHeader,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '300',
        fontWeight: '500'
    },
    headerImage: {
        height: (windowHeight * .3),
        marginLeft: 2,
        marginRight: 2,
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 0,
    },
    description: {
        flex: 1,
        marginTop: 20,
        marginLeft: '5%',
        marginRight: '5%',
    },
})