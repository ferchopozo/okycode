import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'

import { Styles } from './styles' 
import { Layout } from '../../../components/template/layout'
import { Header } from '../../../components/template/header'
import { Body } from '../../../components/template/body'
import { MoneyText } from '../../../components/payment/moneyText'
import { PickerCard } from '../../../components/payment/pickerCard'
import { ContantToolbar } from '../../../core/envrioment/constants'
import { PaymentService } from '../../../core/middleware/paymentService'
import { WalletService } from '../../../core/middleware/walletService'
import { ConfirmPayment as Actiontype } from '../../../core/redux/action.types'

export const Payment = ({navigation}) => {
    const [ loading, setLoading ] = useState(false)  
    const security = useSelector(state => state.security)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [ cards, setCards ] = useState([])
    const schema = Yup.object().shape({
        amount: Yup.string()
                 .test(
                      'is-decimal',
                      'Invalid',
                      //value => (value + "").match(/^\d+(\.\d+)?$/)) -->cualquier decimal
                      value => (value + "").match(/^\d+(?:\.\d{1,2})?$/)), //-->maximo dos decimales
        cardId: Yup.string()
                    .label('cardId')
                    .required(`${t('required')}`),
     })
    const getWallet = async() =>{
        const response = await WalletService.get(security.username)
        setCards(response)
        return response
    }
    const handlePay = async(values)=>{
        setLoading(true)
        const response = await PaymentService.execute(`${values.amount}`, security.username, values.cardId );

        if(response.success){
            dispatch({type: Actiontype, payload:{
                amount: values.amount,
                paymentId: response.object
            }})
            navigation.navigate(ContantToolbar.ConfirmPayment)
        }else{
            console.log("Error", response)
            alert(t('app.card.notValid'))
        }
        
        setLoading(false)
    }

    useEffect(()=>{
        (
            async() => getWallet()
        )()
    },[])

    return <Layout page={ ContantToolbar.More } backgroundColor={'white'} navigatorColor={'white'} >
                <Header title={t('payment.title')} backgroundColor={'white'} > 
                </Header>
                <Body marginTop={20} >
                        <Formik   initialValues={{ amount:'', cardId: '' }}
                                          onSubmit = {(values)=> handlePay(values)}
                                          validationSchema={schema}  >
                                          {({ setFieldValue, handleSubmit, values, errors }) => (
                                                <View>
                                                    <MoneyText placeholder='200.01'
                                                                  onChangeText={ e => setFieldValue('amount', e)}
                                                                  onBlur={ e =>  setFieldValue('amount', e) }
                                                                  errorMessage={errors.amount}
                                                                  value={values.amount}
                                                                  keyboardType = "numeric"
                                                                  titleStyle = {Styles.titleStyle}
                                                                  errorStyle = {Styles.errorStyle}
                                                                  label={t('amount')}/>
                                                    <PickerCard data={ cards } 
                                                                title = {t('card')}
                                                                onChange={ e => setFieldValue('cardId', e)}
                                                                errorMessage = {errors.cardId}
                                                                value={values.cardId}  />
                                                    <Button type="outline"   
                                                                 title={t('payment.button')} 
                                                                 onPress={ handleSubmit }
                                                                 buttonStyle={{borderColor:'#41A330'}}
                                                                 loading = {loading}
                                                                 titleStyle={{color: '#41A330'}} 
                                                                 icon={<Icon name="arrow-right" size={12} color="#41A330" style={{marginRight: 5}} />} />
                                                </View>
                                          )} 
                        </Formik>
                </Body>
           </Layout>
}