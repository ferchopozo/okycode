import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Styles } from './styles' 
import { Layout } from '../../../components/template/layout'
import { Header } from '../../../components/template/header'
import { Body } from '../../../components/template/body'

import { ContantToolbar } from '../../../core/envrioment/constants'
import { LabelIcon } from '../../../components/common/labelIcon'
import { ConfirmationPaymentService } from '../../../core/middleware/confirmationPaymentService'
import { CancelPaymentService } from '../../../core/middleware/cancelPaymentService'
import { ConfirmPayment as ConfirmTypes,
         PickerCardSelected as PickerCardtypes  } from '../../../core/redux/action.types'

export const ConfirmPayment = ({ navigation, route }) => {
     const [ loading, setLoading ] = useState(false)
     const data = useSelector(state => state.confirmPayment)
     const cardSelected = useSelector(state => state.cardSelected)
     const security = useSelector(state => state.security)
     const { t } = useTranslation()
     const dispatch = useDispatch()

     const handleConfirmation = async()=>{
          setLoading(true)
          const response = await ConfirmationPaymentService.execute(data.paymentId)

          if(response.success) {    
            dispatch({type: ConfirmTypes, payload:{}})
            dispatch({type: PickerCardtypes, payload:{}})
            alert(t('transaction.ok'))
            navigation.navigate(ContantToolbar.More)
          }else{
               alert(t('transaction.error'))
          }
          
          setLoading(false)
     }

     const handleCancelPayment = async()=>{
          setLoading(true)
          const response = await CancelPaymentService.execute(data.paymentId)

          if(response.success) {    
            dispatch({type: ConfirmTypes, payload:{}})
            dispatch({type: PickerCardtypes, payload:{}})
            navigation.navigate(ContantToolbar.More)
          }else{
               alert(t('transaction.error'))
          }
          
          setLoading(false)
     }

     return <Layout page={ ContantToolbar.More } backgroundColor={'white'} navigatorColor={'white'} >
               <Header title={t('confirmation.payment.title')} backgroundColor={'white'} > 
               </Header>
               <Body marginTop={20} flex={1} >
                     <ScrollView>
                         <LabelIcon name={t('amount')} icon='dollar' label={`$ ${data.amount}`}/>
                         <LabelIcon name={t('name')} icon='address-card-o' label={`${cardSelected.name}`}/>
                         <LabelIcon name={t('card')} icon='credit-card' label={`xxxx xxxx xxxx ${cardSelected.last4}`}/>
                         <View style={{height:200}} />
                         <Button type="outline"  title={t('confirmation.button.ok')} 
                                                  onPress ={()=>handleConfirmation()}
                                                  buttonStyle={{borderColor:'#41a330'}}
                                                  loading = {loading}
                                                  titleStyle={{color: '#41a330'}} 
                                                  icon={<Icon name="check" size={12} color="#41a330" style={{marginRight: 5}} />}/>
                         <Button type="outline"  title={t('confirmation.button.cancel')} 
                                                  onPress ={()=>handleCancelPayment()}
                                                  buttonStyle={{borderColor:'red', marginTop: 20}}
                                                  loading = {loading}
                                                  titleStyle={{color: 'red'}} 
                                                  icon={<Icon name="minus" size={12} color="red" style={{marginRight: 5}} />}/>
                    </ScrollView>
               </Body>
            </Layout>
}