import React from 'react'
import { View,
    Text,
    TouchableOpacity,
    Linking,
    FlatList,
    ScrollView,
    Platform
} from 'react-native'
import { Icon } from 'react-native-elements'

import { Styles } from './styles'

export const ListOfSocial = ({item}) =>{

    const handlePress = (type,id,path)=>{
         let url = "";
        switch (type) {
            case 'facebook':
                url = ""
                if( Platform.OS === 'ios'){
                    url = `fb://profile/${id}`
                }else if( Platform.OS === 'android'){
                    url = `fb://page/${id}`
                }
                break;
            case 'youtube':
                url = `vnd.youtube://channel//${id}`;
                break;
            case 'instagram':
                url = `instagram://user?username=${id}`;
                break
            default:
                 url = path
                break;
        }

        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                return Linking.openURL(url);
            } else {
                return Linking.openURL(path);
            }
        }).catch(err => console.error('An error occurred', err)); 
    }

    return  <ScrollView style={Styles.socialNetwork}>
                <FlatList data={item.socialMedia}
                        keyExtractor = { (item, index) => index.toString() }
                        scrollEnabled = {false}
                        renderItem = {({item})=>{
                            return (
                            <TouchableOpacity style={Styles.socialItem} onPress={()=> handlePress(item.type,item.id,item.url)}>
                                <Icon name={item.mobileIcon} type='font-awesome' color='white'  size={20} style={Styles.socialIcon} />
                                <Text style={Styles.socialText}>{item.name}</Text>
                            </TouchableOpacity> 
                            )
                        }}
                />        
            </ScrollView>
}