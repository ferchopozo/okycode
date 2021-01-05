import React,{ useEffect, useState } from 'react'
import { View,Dimensions,Image } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Input, Button } from 'react-native-elements'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { ContantToolbar } from '../../../core/envrioment/constants'
import { Layout } from '../../../components/template/layout'
import { Header } from '../../../components/template/header'
import { Body } from '../../../components/template/body'
import { AwsAuthenticationCode } from '../../../core/envrioment/constants'

import { Styles } from './styles'

export const ConfirmForgotPassword = ()=>{
    const windowHeight = Dimensions.get('window').height
    const navigation = useNavigation()
    const [loading,setLoading] = useState(false)
    const { t } = useTranslation()
    const company = useSelector(state => state.company)
    const dispatch = useDispatch()
    const schema = Yup.object().shape({
        email: Yup.string()
                  .label('Email')
                  .email(`${t('app.message.email')}`)
                  .required(`${t('app.message.email.required')}`),
        code: Yup.string()
                  .label('code')
                  .required(`${t('app.message.code.required')}`),
        password: Yup.string()
                  .label('Password')
                  .required(`${t('app.message.password.required')}`)
                  .min(8, `${t('app.message.password')}`) ,
        passwordConfirmation: Yup.string()
                              .required(`${t('app.message.password.required')}`)
                              .oneOf([Yup.ref('password'), null], `${t('Passwords must match')}`)
    })

    const handleConfirmCode = async(input)=>{
        try{
              setLoading(true)
              await Auth.forgotPasswordSubmit(input.email.toLowerCase(), input.code, input.password)
              navigation.navigate(ContantToolbar.SignIn)
        }catch(error){
            if(error && AwsAuthenticationCode.UserNotFound === error.code){
                alert(`${t('signing.alert.userNotFound')}`)
            }else{
                alert(`${t('signing.alert.something.is.wrong')}`)
            }
        }  
        finally {
            setLoading(false)
        }     
    }
    
    return(
        <Layout page={ ContantToolbar.More } backgroundColor='white' navigatorColor={'white'}>
            <Header title={t('confirm.forgot.password.title')} height={windowHeight*.1} />
            <Body marginleft={0} marginRight={0} flex={1}>
                <View style={Styles.headerImage}>
                        <Image source={{ uri: company.security.imageConfirmCode}} style={Styles.image}  />
                </View>
                <Formik
                    initialValues={{ email: '',code: '', password:'', passwordConfirmation: '' }}
                    onSubmit = {(values)=> handleConfirmCode(values)}
                    validationSchema={schema}  >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <View style={Styles.container} >
                                <Input  placeholder="Code"
                                        onChangeText={handleChange('code')}
                                        onBlur={handleBlur('code')}
                                        errorMessage={errors.code}
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        errorStyle = {Styles.errorStyle}
                                        value={values.code}
                                        leftIcon={{ type: 'font-awesome', name: 'check', color: '#41a330', size:18 }}/>
                                <Input  placeholder='email@address.com'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        errorMessage={errors.email}
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        errorStyle = {Styles.errorStyle}
                                        value={values.email}
                                        leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#41a330', size:18 }}/>
                                  <Input  placeholder="Password"
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        errorMessage={errors.password}
                                        value={values.password}
                                        titleStyle = {Styles.titleStyle}
                                        errorStyle = { Styles.errorStyle }
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        secureTextEntry={true}
                                        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#41a330', size:18 }}/>
                                <Input  placeholder="Confirm Password"
                                        onChangeText={handleChange('passwordConfirmation')}
                                        onBlur={handleBlur('passwordConfirmation')}
                                        errorMessage={errors.passwordConfirmation}
                                        titleStyle = {Styles.titleStyle}
                                        errorStyle = { Styles.errorStyle }
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        value={values.passwordConfirmation}
                                        secureTextEntry={true}
                                        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#41a330', size:18 }}/>
                                <View style={Styles.containerButton}>
                                       <Button title={t('signing.button.confirm.code')}
                                               type="outline"
                                               onPress={handleSubmit}
                                               loading = {loading}
                                               buttonStyle={{borderColor:'#41a300'}}
                                               titleStyle={{color: '#378a28'}}     
                                        />
                                 </View>
                            </View> 
                         )}
                </Formik>
            </Body>
        </Layout>
    )

}