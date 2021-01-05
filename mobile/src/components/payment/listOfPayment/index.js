import React from 'react'
import { View,
         Text,
         TouchableOpacity,
         FlatList
    } from 'react-native'
import { Icon } from 'react-native-elements'
import { useTranslation } from 'react-i18next'
import moment from "moment"

import { Styles } from './styles'
import { Loading } from '../../../components/template/loading'

export const ListOfPayment = ({title, data, loading = false }) =>{
    const { t } = useTranslation()
    const getStatus = (status) =>{
        switch (status) {
            case 'P':
                 return t('PENDING')
            case 'C':
                    return t('PAID')
            case 'D':
                        return t('CANCEL')
            default:
                return t('N/A')
        }
    }
   
    const renderItem = (item) => {
        const paymentDate = moment(item.dateCreated)
        return (<TouchableOpacity style={Styles.item} >
                     <Icon name={'credit-card'} type={'font-awesome'} color='#2f7722'  size={18} style={Styles.icon} />
                     <Text style={Styles.itemText}>
                         $ {item.amount}     {`${getStatus(item.statusPayment)}`} {'\n'}
                         {item.cardBrand} xxxx xxxx xxxx {item.cardNumber} {'\n'}
                         {item.cardName} {'\n'} 
                         {paymentDate.format('MM/DD/YYYY HH:mm')} {'\n'} 
                        
                     </Text>
            </TouchableOpacity>)
    }
  
    return   !loading ?
             <View style={Styles.container}>
                <Text style={Styles.title} >{t(title)}</Text>
                <FlatList data={data}
                        keyExtractor = { (item, index) => index.toString() }
                        scrollEnabled = {false}
                        renderItem = {({item})=>renderItem(item)}/> 
            </View>: <Loading color='black' />
}