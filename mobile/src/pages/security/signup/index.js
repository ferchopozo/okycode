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
import { VerifyUser } from '../../../core/redux/action.types'

import { Styles } from './styles'

export const SignUp = ()=>{
    const windowHeight = Dimensions.get('window').height
    const navigation = useNavigation()
    const [loading,setLoading] = useState(false)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const company = useSelector(state => state.company)
    const schema = Yup.object().shape({
        name: Yup.string()
                  .label('name')
                  .required(`${t('app.message.name.required')}`),
        lastName: Yup.string()
                  .label('lastName')
                  .required(`${t('app.message.lastName.required')}`),
        phone: Yup.string()
                  .label('phone'),
        email: Yup.string()
                  .label('Email')
                  .email(`${t('app.message.email')}`)
                  .required(`${t('app.message.email.required')}`),
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

              const user = await Auth.signUp({
                'username': input.email.toLowerCase(),
                'password': input.password,
                'attributes': {
                    'custom:name': input.name,
                    'custom:lastName': input.lastName,
                    'custom:phone': input.phone
                }
              })
            console.log(user)
             dispatch({type: VerifyUser, payload:input.email })


              navigation.navigate(ContantToolbar.ConfirmCode)
        }catch(error){
            if(error.code === AwsAuthenticationCode.ExistUser){
                alert(`${t('security.alert.existUser')}`)
            }else{
                alert(`${t('signing.alert.something.is.wrong')}`)
            }

            console.log('Error', error)
        }  
        finally {
            setLoading(false)
        }     
    }
    

    return(
        <Layout page={ ContantToolbar.More } backgroundColor='white' navigatorColor={'white'}>
            <Header title={t('signup.title')} height={windowHeight*.1} />
            <Body marginleft={0} marginRight={0} flex={1}>
                <Formik
                    initialValues={{ email: '', password:'', lastName:'', name:'', phone:'' }}
                    onSubmit = {(values)=> handleSignUp(values)}
                    validationSchema={schema}  >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <View style={Styles.container} >
                                <Input  placeholder='Jhon'
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        errorMessage={errors.name}
                                        titleStyle = {Styles.titleStyle}
                                        errorStyle = { Styles.errorStyle }
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        value={values.name}
                                        leftIcon={{ type: 'font-awesome', name: 'asterisk', color: '#41a330', size:18 }}/>
                                 <Input  placeholder='Smith'
                                        onChangeText={handleChange('lastName')}
                                        onBlur={handleBlur('lastName')}
                                        errorMessage={errors.lastName}
                                        value={values.lastName}
                                        titleStyle = {Styles.titleStyle}
                                        errorStyle = { Styles.errorStyle }
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        leftIcon={{ type: 'font-awesome', name: 'asterisk', color: '#41a330', size:18 }}/>
                                <Input  placeholder='+1 888 111 44444'
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        value={values.phone}
                                        titleStyle = {Styles.titleStyle}
                                        errorStyle = { Styles.errorStyle }
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
                                        leftIcon={{ type: 'font-awesome', name: 'phone', color: '#41a330', size:18 }}/>
                                <Input  placeholder='email@address.com'
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        errorMessage={errors.email}
                                        value={values.email}
                                        titleStyle = {Styles.titleStyle}
                                        errorStyle = { Styles.errorStyle }
                                        inputContainerStyle = { Styles.inputStyle }
                                        leftIconContainerStyle = { Styles.leftIconStyle }
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