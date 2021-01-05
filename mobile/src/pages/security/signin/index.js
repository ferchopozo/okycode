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

export const SignIn = ()=>{
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
        password: Yup.string()
                  .label('Password')
                  .required(`${t('app.message.password.required')}`)
                  .min(8, `${t('app.message.password')}`) 
    })
    const handleSignin = async(credential)=>{
        try{
              setLoading(true)
              const user = await Auth.signIn(credential.email.toLowerCase(), credential.password)
              dispatch({type: SecurityUser, payload:user })
              navigation.goBack();
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
            <Header title={t('signin.title')} height={windowHeight*.1} />
            <Body marginleft={0} marginRight={0} flex={1}>
                <View style={Styles.headerImage}>
                        <Image source={{ uri: company.security.imageSignIn }} style={Styles.image}  />
                </View>
                <Formik
                    initialValues={{ email: '', password:'' }}
                    onSubmit = {(values)=> handleSignin(values)}
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
                                <Input  placeholder="Password"
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        errorMessage={errors.password}
                                        value={values.password}
                                        secureTextEntry={true}
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        titleStyle = {Styles.titleStyle}
                                        errorStyle = {Styles.errorStyle}
                                        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#41a330', size:18 }}/>
                                <View style={Styles.containerButton}>
                                       <Button title={t('signing.button.login')}
                                               type="outline"
                                               onPress={handleSubmit}
                                               loading = {loading}
                                               buttonStyle={{borderColor:'#41a300'}}
                                               titleStyle={{color: '#378a28'}}     
                                        />
                                        <Button title={t('signing.button.forgot')}
                                               type="clear"
                                               onPress = {() => navigation.navigate(ContantToolbar.ForgotPassword)}
                                               buttonStyle={{justifyContent: 'flex-end'}}
                                               titleStyle={{color: '#595959'}}     
                                        />
                                        <Button title={t('signing.button.signUp')}
                                               type="clear"
                                               onPress={()=> navigation.navigate(ContantToolbar.SignUp)}
                                               buttonStyle={{justifyContent: 'flex-end'}}
                                               titleStyle={{color: '#595959'}}     
                                        />
                                 </View>
                            </View> 
                         )}
                </Formik>
            </Body>
        </Layout>
    )
}