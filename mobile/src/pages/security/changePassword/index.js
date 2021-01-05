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
import { useEffect } from 'react'

export const ChangePassword = ()=>{
    const windowHeight = Dimensions.get('window').height
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const user = useSelector(state => state.security)
    const [loading,setLoading] = useState(false)
    const { t } = useTranslation()
    const schema = Yup.object().shape({
        email: Yup.string()
                  .label('Email')
                  .email(`${t('app.message.email')}`)
                  .required(`${t('app.message.email.required')}`),
        oldPassword: Yup.string()
                  .label('oldPassword')
                  .required(`${t('app.message.password.required')}`)
                  .min(8, `${t('app.message.password')}`) ,
        password: Yup.string()
                  .label('Password')
                  .required(`${t('app.message.password.required')}`)
                  .min(8, `${t('app.message.password')}`) ,
        passwordConfirmation: Yup.string()
                                 .required(`${t('app.message.password.required')}`)
                                 .oneOf([Yup.ref('password'), null], `${t('Passwords must match')}`)
    })
    const handleSignUp = async(input)=>{
        try{
              setLoading(true)
              const currentUser = await Auth.currentAuthenticatedUser()
              const response = await Auth.changePassword(currentUser, input.oldPassword, input.password)
              dispatch({type: SecurityUser, payload:null })
              navigation.navigate(ContantToolbar.More)
        }catch(error){
            if(error.code === AwsAuthenticationCode.ExistUser){
                alert(`${t('security.alert.existUser')}`)
            }else{
                alert(`${t('signing.alert.something.is.wrong')}`)
            }
        }  
        finally {
            setLoading(false)
        }     
    }

    useEffect(()=>{
        //console.log(security)
    }, [])
    

    return(
        <Layout page={ ContantToolbar.More } backgroundColor='white' navigatorColor={'white'}>
            <Header title={t('change.password.title')} height={windowHeight*.1} />
            <Body marginleft={0} marginRight={0} flex={1}>
                <Formik
                    initialValues={{ email: user?user.attributes['email']:'', oldPassword:'',password:'' }}
                    onSubmit = {(values)=> handleSignUp(values)}
                    validationSchema={schema}  >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <View style={Styles.container} >
                                <Input  placeholder='email@address.com'
                                        onChangeText={handleChange('email')}
                                        editable = {false}
                                        onBlur={handleBlur('email')}
                                        errorMessage={errors.email}
                                        value={values.email}
                                        titleStyle = {Styles.titleStyle}
                                        errorStyle = { Styles.errorStyle }
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#41a330', size:18 }}/>
                                <Input  placeholder="Old Password"
                                        onChangeText={handleChange('oldPassword')}
                                        onBlur={handleBlur('oldPassword')}
                                        errorMessage={errors.oldPassword}
                                        value={values.oldPassword}
                                        titleStyle = {Styles.titleStyle}
                                        errorStyle = { Styles.errorStyle }
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        secureTextEntry={true}
                                        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#41a330', size:18 }}/>
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
                                       <Button title={t('signing.button.signUp')}
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
        </Layout>)
    
}