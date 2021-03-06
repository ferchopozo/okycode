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

export const ConfirmCode = ()=>{
    const windowHeight = Dimensions.get('window').height
    const navigation = useNavigation()
    const [loading,setLoading] = useState(false)
    const { t } = useTranslation()
    const company = useSelector(state => state.company)
    const verify = useSelector(state => state.verify)
    const dispatch = useDispatch()
    const schema = Yup.object().shape({
        email: Yup.string()
                  .label('Email')
                  .email(`${t('app.message.email')}`)
                  .required(`${t('app.message.email.required')}`),
        code: Yup.string()
                  .label('code')
                  .required(`${t('app.message.code.required')}`)
    })

    const handleConfirmCode = async(input)=>{
        try{
              setLoading(true)
              await Auth.confirmSignUp(input.email.toLowerCase(), input.code);
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
            <Header title={t('confirm.code.title')} height={windowHeight*.1} />
            <Body marginleft={0} marginRight={0} flex={1}>
                <View style={Styles.headerImage}>
                        <Image source={{ uri: company.security.imageConfirmCode}} style={Styles.image}  />
                </View>
                <Formik
                    initialValues={{ email: `${verify?verify:''}`, password:'' }}
                    onSubmit = {(values)=> handleConfirmCode(values)}
                    validationSchema={schema}  >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <View style={Styles.container} >
                                <Input  placeholder='email@address.com'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        errorMessage={errors.email}
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        errorStyle = {Styles.errorStyle}
                                        value={values.email}
                                        leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#41a330', size:18 }}/>
                                <Input  placeholder="Code"
                                        onChangeText={handleChange('code')}
                                        onBlur={handleBlur('code')}
                                        errorMessage={errors.code}
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        errorStyle = {Styles.errorStyle}
                                        value={values.code}
                                        leftIcon={{ type: 'font-awesome', name: 'check', color: '#41a330', size:18 }}/>
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