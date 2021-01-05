import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { Styles } from './styles' 
import { Layout } from '../../../components/template/layout'
import { Header } from '../../../components/template/header'
import { Body } from '../../../components/template/body'
import { CardText } from '../../../components/payment/cardText'
import { MonthText } from '../../../components/payment/monthText'
import { IntegerText } from '../../../components/payment/integerText'

import { ContantToolbar } from '../../../core/envrioment/constants'
import { AddCardService } from '../../../core/middleware/addCardService'

export const AddCard = ({ navigation, route }) => {
     const [ loading, setLoading ] = useState(false)
     const security = useSelector(state => state.security)
     const { t } = useTranslation()
     const schema = Yup.object().shape({
          cardName: Yup.string()
                    .label('cardName')
                    .required(`${t('required')}`),
          cardNumber: Yup.string()
                    .label('cardNumber')
                    .length(19,'error')
                    .required(`${t('required')}`),
          month: Yup.string()
                    .label('month')
                    .length(2,'error')
                    .required(`${t('required')}`),
          year: Yup.string()
                    .label('year')
                    .length(2,'error')
                    .required(`${t('required')}`),
          cvc: Yup.string()
                    .label('cvc')
                    .length(3,'error')
                    .required(`${t('required')}`),
          zipCode: Yup.string()
                    .label('Zip Code')
                    .length(5,'error')
                    .required(`${t('required')}`)
      })

     const handleAddCard = async(card)=>{
          setLoading(true)
          const response = await AddCardService.add(security, card);

          if(response.success){
               route.params.onNavigateBack()
               navigation.goBack()
          }else{
             alert(t('app.card.notValid'))
          }
          
          setLoading(false)
     }

     return <Layout page={ ContantToolbar.More } backgroundColor={'white'} navigatorColor={'white'} >
               <Header title={t('add.screen.title')} backgroundColor={'white'} > 
               </Header>
               <Body marginTop={20} flex={.9}>
                    <ScrollView>
                         <Formik   initialValues={{ cardName: '', cardNumber:'', month:'', year: '', zipCode: '' }}
                                   onSubmit = {(values)=> handleAddCard(values)}
                                   validationSchema={schema}  >
                                   {({ handleChange, handleBlur, setFieldValue, handleSubmit, values, errors }) => (
                                        <View>
                                                  <Input  placeholder='Jhon Smith'
                                                       onChangeText={handleChange('cardName')}
                                                       onBlur={handleBlur('cardName')}
                                                       errorMessage={errors.cardName}
                                                       value={values.cardName}
                                                       keyboardType = "default"
                                                       maxLength = {80}
                                                       label="Card Name"
                                                       inputContainerStyle = { Styles.inputStyle }
                                                       leftIconContainerStyle = { { margin: 5 } }
                                                       titleStyle = {Styles.titleStyle}
                                                       errorStyle = { Styles.errorStyle }
                                                       leftIcon={{ type: 'font-awesome', name: 'address-card-o', color: '#41a330', size:18 }}
                                                  />
                                                  <CardText placeholder='xxxx xxxx xxxx xxxx'
                                                            onChangeText={handleChange('cardNumber')}
                                                            onBlur={handleBlur('cardNumber')}
                                                            errorMessage={errors.cardNumber}
                                                            value={values.cardNumber}
                                                            keyboardType = "numeric"
                                                            maxLength = {19}
                                                            label="Card Number"
                                                            titleStyle = {Styles.titleStyle}
                                                            errorStyle = { Styles.errorStyle }
                                                            leftIcon={{ type: 'font-awesome', name: 'credit-card', color: '#41a330', size:18 }}
                                                  />
                                                  <View style = { Styles.containerNumeric } >
                                                       <View  style = { Styles.containerShort }>
                                                            <MonthText placeholder='xx'
                                                                      onChangeText={ e => setFieldValue('month', e)}
                                                                      onBlur={ e =>  setFieldValue('month', e) }
                                                                      errorMessage={errors.month}
                                                                      value={values.month}
                                                                      keyboardType = "numeric"
                                                                      maxLength = {2}
                                                                      label="Month"
                                                                      titleStyle = {Styles.titleStyle}
                                                                      errorStyle = { Styles.errorStyle }
                                                                      leftIcon={{ type: 'font-awesome', name: 'hashtag', color: '#41a330', size:18 }}
                                                            />
                                                       </View>
                                                       <View  style = { Styles.containerShort }>
                                                            <IntegerText placeholder='xx'
                                                                      onChangeText={ e => setFieldValue('year', e)}
                                                                      onBlur={ e =>  setFieldValue('year', e) }
                                                                      errorMessage={errors.year}
                                                                      value={values.year}
                                                                      keyboardType = "numeric"
                                                                      fillZero = {2}
                                                                      maxLength = {2}
                                                                      label="Year"
                                                                      titleStyle = {Styles.titleStyle}
                                                                      errorStyle = { Styles.errorStyle }
                                                                      leftIcon={{ type: 'font-awesome', name: 'hashtag', color: '#41a330', size:18 }}
                                                            />
                                                       </View>
                                                       <View  style = { Styles.containerShort }>
                                                            <IntegerText placeholder='xxx'
                                                                      onChangeText={ e => setFieldValue('cvc', e)}
                                                                      onBlur={ e =>  setFieldValue('cvc', e) }
                                                                      errorMessage={errors.cvc}
                                                                      value={values.cvc}
                                                                      keyboardType = "numeric"
                                                                      fillZero = {3}
                                                                      maxLength = {3}
                                                                      label="CVC"
                                                                      errorStyle = { Styles.errorStyle }
                                                                      style = { Styles.containerShort }
                                                                      leftIcon={{ type: 'font-awesome', name: 'hashtag', color: '#41a330', size:18 }}
                                                            />
                                                       </View>
                                                  </View>
                                                  <View style={ Styles.containerZipCode}>
                                                            <IntegerText   placeholder='xxxxx'
                                                                           onChangeText={ e => setFieldValue('zipCode', e)}
                                                                           onBlur={ e =>  setFieldValue('zipCode', e) }
                                                                           errorMessage={errors.year}
                                                                           value={values.zipCode}
                                                                           keyboardType = "numeric"
                                                                           fillZero = {5}
                                                                           maxLength = {5}
                                                                           titleStyle = {Styles.titleStyle}
                                                                           errorStyle = { Styles.errorStyle }
                                                                           label="Zip Code"
                                                                           leftIcon={{ type: 'font-awesome', name: 'hashtag', color: '#41a330', size:18 }}
                                                            />
                                                  </View>
                                                  <View style={{height:20}} />
                                                       <Button type="outline"   
                                                                 title={t('add.screen.button.add')} 
                                                                 onPress={ handleSubmit }
                                                                 buttonStyle={{borderColor:'#41A330'}}
                                                                 loading = {loading}
                                                                 titleStyle={{color: '#41A330'}} 
                                                                 icon={<Icon name="plus" size={12} color="#41A330" style={{marginRight: 5}} />} />
                                                  </View>
                                   )} 
                         </Formik>
                    </ScrollView>
               </Body>
            </Layout>
}