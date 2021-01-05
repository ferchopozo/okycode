import React,
       { useEffect, useState } 
from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { ListOfPayment } from '../../../components/payment/listOfPayment'
import { ContantToolbar } from '../../../core/envrioment/constants'
import { Layout } from '../../../components/template/layout'
import { Header } from '../../../components/template/header'
import { PaymentHistoryService } from '../../../core/middleware/paymentHistoryService'

export const PaymentHistory = ({ navigation, route }) => {
    
    const { t } = useTranslation()
    const [ dataPayment , setDataPayment]   = useState([])
    const [ loading , setLoading ]   = useState(false)
    const security = useSelector(state => state.security)
    const handleNavigateBack = async(input = null) => {
        setLoading(true)
        const items = await PaymentHistoryService.get(security.username)
        setDataPayment(items)
        setLoading(false)
    }

     useEffect(()=>{
          ( 
             async() => handleNavigateBack()
          )()
     },[])

    return  <Layout page={ ContantToolbar.More } backgroundColor={'white'} navigatorColor={'white'} >    
                    <Header title={t('payment.history.title')} backgroundColor={'white'} height={'10%'}  > 
                    </Header> 
                    <ScrollView style={{flex: 1}}>                 
                              <ListOfPayment title={t('payment.history.list')} 
                                             data={ dataPayment } loading={ loading }  />
                    </ScrollView>
            </Layout>
}