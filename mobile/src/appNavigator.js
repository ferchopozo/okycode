import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './pages/home'
import { Init } from './pages/init'
import { NoConnection } from './pages/noConecction'
import { AboutUs } from './pages/aboutUs'
import { Category } from './pages/category'
import { Service } from './pages/service'
import { ContactUs } from './pages/contactUs'
import { More } from './pages/more'
import { SignIn } from './pages/security/signin'
import { SignUp } from './pages/security/signup'
import { SignOff } from './pages/security/signOff'
import { ConfirmCode } from './pages/security/confirmCode'
import { Wallet } from './pages/payment/wallet'
import { DetailCard } from './pages/payment/detailCard'
import { AddCard } from './pages/payment/addCard'
import { Payment } from './pages/payment/payment'
import { ConfirmPayment } from './pages/payment/confirmpayment'
import { AboutMe } from './pages/general/aboutMe'
import { ChangeLanguage } from './pages/general/changeLanguage'
import { ForgotPassword } from './pages/security/forgotPassword'
import { ConfirmForgotPassword } from './pages/security/confirmForgotPassword'
import { ChangePassword } from './pages/security/changePassword'
import { PaymentHistory } from './pages/payment/paymentHistory'

import { ContantToolbar } from  './core/envrioment/constants'

export const AppNavigator = () => {
    const optionScreen = {
        headerShown:true, 
        title: ' ', 
        headerTransparent:true,
        headerStyle:{ 
            backgroundColor: 'transparent',
        }
    }
   const Stack = createStackNavigator();
   
   return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName={ContantToolbar.Init}  >
            <Stack.Screen name={ContantToolbar.Init} component={ Init } options={{ headerShown:false, title: ' ' }} /> 
            <Stack.Screen name={ContantToolbar.Home} component={ Home } options={{ headerShown:false, title: ' ',gestureEnabled:false}} /> 
            <Stack.Screen name={ContantToolbar.NoConnection} component={ NoConnection } options={{ headerShown:false, title: ' ' }} /> 
            <Stack.Screen name={ContantToolbar.About} component={ AboutUs } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.Category} component={ Category } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.Service} component={ Service } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.Contact} component={ ContactUs } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.More} component={ More } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.SignIn} component={ SignIn } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.SignUp} component={ SignUp } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.SignOff} component={ SignOff } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.ConfirmCode} component={ ConfirmCode } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.Wallet} component={ Wallet } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.DetailCard} component={ DetailCard } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.AddCard} component={ AddCard } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.Payment} component={ Payment } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.ConfirmPayment} component={ ConfirmPayment } options={{ headerShown:false, title: ' ' }} /> 
            <Stack.Screen name={ContantToolbar.AboutMe} component={ AboutMe } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.ChangeLanguage} component={ ChangeLanguage } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.ForgotPassword} component={ ForgotPassword } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.ConfirmForgotPassword} component={ ConfirmForgotPassword } options={{ headerShown:false, title: ' ' }} /> 
            <Stack.Screen name={ContantToolbar.ChangePassword} component={ ChangePassword } options={optionScreen} /> 
            <Stack.Screen name={ContantToolbar.PaymentHistory} component={ PaymentHistory } options={optionScreen} /> 
        </Stack.Navigator>
    </NavigationContainer>
   )
}