import React,
       { useEffect, useState } 
from 'react'
import { View,
         ScrollView } 
from 'react-native'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import { ListOfCards } from '../../../components/payment/listOfCards'
import { ContantToolbar } from '../../../core/envrioment/constants'

import { Layout } from '../../../components/template/layout'
import { Header } from '../../../components/template/header'
import { Styles } from './styles'

import { WalletService } from '../../../core/middleware/walletService'

export const Wallet = ({ navigation, route }) => {
    
    const { t } = useTranslation()
    const [ cards , setCards]   = useState([])
    const [ loading , setLoading ]   = useState(false)
    const security = useSelector(state => state.security)
    const handleNavigateBack = async(input = null) => {
        setLoading(true)
        const items = await WalletService.get(security.username)
        setCards(items)
        setLoading(false)
    }

     useEffect(()=>{
          ( 
             async() => handleNavigateBack()
          )()
     },[])

    return  <Layout page={ ContantToolbar.More } backgroundColor={'white'} navigatorColor={'white'} >
               
                         <Header title={t('wallet.title')} backgroundColor={'white'} > 
                              <View style={Styles.ContainerToolBar}>
                                   <Button type="outline" title={t('wallet.button.add')} 
                                             onPress = {() => navigation.navigate(ContantToolbar.AddCard, {
                                                  onNavigateBack: () => handleNavigateBack()
                                                })}
                                             buttonStyle={{borderColor:'#41a330'}}
                                             titleStyle={{color: '#41a330'}} 
                                             icon={<Icon name="plus" size={12} color="#41a330" style={{marginRight: 5}} />}/>
                              </View>
                         </Header> 
                         <ScrollView style={{flex: 1}}>                 
                              <ListOfCards title={t('wallet.list.title')} 
                                        data={cards} 
                                        loading={loading} handleNavigateBack={handleNavigateBack} />
                         </ScrollView>
            </Layout>
}