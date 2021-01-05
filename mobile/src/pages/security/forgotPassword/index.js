import React,{ useState} from 'react'
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
import { SecurityUser } from '../../../core/redux/action.types'

import { Styles } from './styles'

export const ForgotPassword = ()=>{
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
                  .required(`${t('app.message.email.required')}`)
    })
    const handleOnPress = async(credential)=>{
        try{
              setLoading(true)
              const user = await Auth.forgotPassword(credential.email.toLowerCase())
              navigation.navigate(ContantToolbar.ConfirmForgotPassword)
        }catch{       
            navigation.goBack()
        }  
        finally {
            setLoading(false)
        }     
    }
    
    return(
        <Layout page={ ContantToolbar.More } backgroundColor='white' navigatorColor={'white'}>
            <Header title={t('forgot.password.title')} height={windowHeight*.1} />
            <Body marginleft={0} marginRight={0} flex={1}>
                <View style={Styles.headerImage}>
                        <Image source={{ uri: company.security.imageSignIn }} style={Styles.image}  />
                </View>
                <Formik
                    initialValues={{ email: '' }}
                    onSubmit = {(values)=> handleOnPress(values)}
                    validationSchema={schema}  >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <View style={Styles.container} >
                                <Input  placeholder='email@address.com'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        errorMessage={errors.email}
                                        value={values.email}
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        titleStyle = {Styles.titleStyle}
                                        errorStyle = {Styles.errorStyle}
                                        leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#41a330', size:18 }}/>
                                <View style={Styles.containerButton}>
                                       <Button title={t('forgot.password.button')}
                                               type="outline"
                                               onPress={handleSubmit}
                                               loading = {loading}
                                               buttonStyle={{borderColor:'#41a300'}}
                                               titleStyle={{color: '#378a28'}} />
                                 </View>
                            </View> 
                         )}
                </Formik>
            </Body>
        </Layout>
    )
}