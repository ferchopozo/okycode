import React from 'react'
import { useTranslation } from 'react-i18next'
import { View,
        Text,
        Linking,
        TouchableOpacity,
      } from 'react-native'
import { Icon } from 'react-native-elements'

import { Styles } from './styles'

export const GetInTouch = ({item})=>{
    const { t } = useTranslation()
    const HandleWhatsApp = (phone)=>{
        let message= t('contactus.messageWa');
        let url = `whatsapp://send?text=${message}&phone=${phone}` 
    
        Linking.canOpenURL(url)
               .then(supported => {
                    if (supported) {
                        return Linking.openURL(url);
                    }else{
                        return Linking.openURL(`https://wa.me/${phone}?text=${message}`);
                    }
                })
        .catch(err => console.log(err))       
    }

    const HandlePressAddress = (latitude,longitude, company)=>{
        
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' })
        const latLng = `${latitude},${longitude}`

        console.log('Coordinadas',latLng);
    
        const url = Platform.select({
          ios: `${scheme}${company}@${latLng}`,
          android: `${scheme}${latLng}(${company})`
        })
    
        Linking.openURL(url);
    }

    const HandleCallMe = (phone)=>{
        let url = ''
    
        if (Platform.OS !== 'android') {
          url = `telprompt:${phone}`;
        }
        else if(Platform.OS !== 'ios')  {
          url = `tel:${phone}`;
        }
    
        Linking.canOpenURL(url)
                .then(supported => {
                    if (supported) {
                        return Linking.openURL(url);
                    }
                })
        .catch(err => console.log(err))                     
    }

    const HandlePressMail = (mail)=>{
        try{
           Linking.openURL(`mailto:${mail}?subject=SendMail&body=Description`)  
        }catch(err){
           console.log(err) 
        }
    } 

    return (
        <>
           <View style={Styles.legendGetInTouch}>
               <Text style={{color:'silver'}}>{t('company.getInTouch')}</Text>
           </View>
            <View style={Styles.rectangle} >
                <TouchableOpacity key={'0'} style={Styles.rectangleItem} onPress={()=>{ HandleWhatsApp(item.whatsApp) }}>
                    <Icon name='whatsapp' color="white"  type='font-awesome' size={28} style={Styles.iconItem} />
                    <Text style={Styles.textItem}>{t('contactus.whatsapp')}</Text>   
                </TouchableOpacity>  
                <TouchableOpacity key={'1'} style={Styles.rectangleItem} onPress={()=>{ HandlePressAddress(item.coordinates.latitude,item.coordinates.longitud, t(item.name)) }}>
                    <Icon name='map-marker' color="white"  type='font-awesome' size={28} style={Styles.iconItem} />
                    <Text style={Styles.textItem}>{t('contactus.address')}</Text>   
                </TouchableOpacity>
                <TouchableOpacity key={'2'}  style={Styles.rectangleItem} onPress={()=>{ HandleCallMe(item.phone) }}>
                    <Icon name='mobile' color="white" type='font-awesome' size={48}  style={Styles.iconItem} />
                    <Text style={Styles.textItem}>{t('contactus.callus')}</Text>   
                </TouchableOpacity>
                <TouchableOpacity key={'3'} style={Styles.rectangleItem} onPress={()=>{ HandlePressMail(item.email) }}>
                    <Icon name='envelope' color="white"  type='font-awesome' size={28} style={Styles.iconItem} />
                    <Text style={Styles.textItem}>{t('contactus.email')}</Text>   
                </TouchableOpacity>
            </View>
        </>
    )
}