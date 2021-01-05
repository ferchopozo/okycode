import React, { useEffect} from 'react'
import { View,
         Text,
         TouchableOpacity,
         FlatList
    } from 'react-native'
import { Icon } from 'react-native-elements'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { Styles } from './styles'
import { ContantToolbar } from '../../../core/envrioment/constants'
import { DetailCard as Actiontype } from '../../../core/redux/action.types'
import { Loading } from '../../../components/template/loading'

export const ListOfCards = ({title, data, loading = false, handleNavigateBack }) =>{
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigation = useNavigation()
   
    const renderItem = (item) => {
        return (<TouchableOpacity style={Styles.item} onPress={()=>handleClickItem(item)} >
                     <Icon name={`cc-${item.brand.toLowerCase()}`} type={'font-awesome'} color='#2f7722'  size={18} style={Styles.icon} />
                     <Text style={Styles.itemText}>
                         xxxx xxxx xxxx {item.last4} {'\n'}
                         {item.name}  {item.exp_month}/{item.exp_year}    
                     </Text>
                     <Icon name={'chevron-right'} type='font-awesome' color='#a6a6a6'  size={12} style={Styles.icon} />
            </TouchableOpacity>)
    }
    const handleClickItem = (item)=>{
        dispatch({type: Actiontype, payload:item })
        navigation.navigate(ContantToolbar.DetailCard, {
            onNavigateBack: (data) => {
                if( handleNavigateBack){
                    handleNavigateBack(data)
                }
            }
          })
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