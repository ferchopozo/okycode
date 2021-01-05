import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Styles } from './styles' 
import { Layout } from '../../../components/template/layout'
import { Header } from '../../../components/template/header'
import { Body } from '../../../components/template/body'

import { ContantToolbar } from '../../../core/envrioment/constants'
import { LabelIcon } from '../../../components/common/labelIcon'
import { WalletService } from '../../../core/middleware/walletService'
import { RemoveCardService } from '../../../core/middleware/removeCardService'

export const DetailCard = ({ navigation, route }) => {
     const [ loading, setLoading ] = useState(false)
     const data = useSelector(state => state.detailCard)
     const security = useSelector(state => state.security)
     const { t } = useTranslation()

     const handleRemoveCard = async(card)=>{

          setLoading(true)
          const response = await RemoveCardService.remove(security.username,card)

          if(response.success) {
               route.params.onNavigateBack()
               navigation.goBack()
          }else{
               alert("Error on Delete")
          }
          
          setLoading(false)
     }

     return <Layout page={ ContantToolbar.More } backgroundColor={'white'} navigatorColor={'white'} >
               <Header title={t('card.title')} backgroundColor={'white'} > 
               </Header>
               <Body marginTop={20} flex={1} >
                     <ScrollView>
                         <LabelIcon name={t('wallet.field.name')} icon='address-card-o' label={`${data.name}`}/>
                         <LabelIcon name={t('wallet.field.number')} icon='credit-card' label={`xxxx xxxx xxxx ${data.last4}`}/>
                         <LabelIcon name={t('wallet.field.month')} icon='hashtag' label={`${data.exp_month}`}/>
                         <LabelIcon name={t('wallet.field.year')} icon='hashtag' label={`${data.exp_year}`}/>
                         <LabelIcon name={t('wallet.field.zip.code')} icon='map-marker' label={`${data.address_zip}`}/>
                         <View style={{height:200}} />
                         <Button type="outline"  title={t('wallet.button.remove')} 
                                                  onPress ={()=>handleRemoveCard(data.id)}
                                                  buttonStyle={{borderColor:'red'}}
                                                  loading = {loading}
                                                  titleStyle={{color: 'red'}} 
                                                  icon={<Icon name="minus" size={12} color="red" style={{marginRight: 5}} />}/>
                    </ScrollView>
               </Body>
            </Layout>
}