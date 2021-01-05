import React from 'react'
import { ContantToolbar, TypeEnabledSettings } from '../../core/envrioment/constants'

import ReactImage from '../../../assets/react.png'
import AwsImage from '../../../assets/aws.png'
import StripeImage from '../../../assets/stripe.png'

export const ToolBarData=[{id:ContantToolbar.Home,text:'menu.home', icon:'home',typeIcon:'font-awesome', size:26},
                        {id:ContantToolbar.About,text:'menu.aboutus', icon:'users',typeIcon:'font-awesome',size:20},
                        {id:ContantToolbar.Contact,text:'menu.contactus', icon:'id-card',typeIcon:'font-awesome',size:26},
                        {id:ContantToolbar.More,text:'menu.more', icon:'th-list',typeIcon:'font-awesome',size:26}]

export const ImagesAboutMe = [{image: ReactImage},
                              {image: AwsImage},
                              {image: StripeImage} ]

export const LanguageData  = [{ id:'en', name:'English'},
                              {id: 'sp', name:'Español'} ]   
                              
export const GeneralSettingData = [{id:1, name:'option.aboutme',typeicon:'font-awesome', mobileIcon:'code', menu:ContantToolbar.AboutMe, typeEnabled : TypeEnabledSettings.AlwaysVisible},
                                   {id:2, name:'option.language',typeicon:'font-awesome', mobileIcon:'language', menu:ContantToolbar.ChangeLanguage, typeEnabled : TypeEnabledSettings.AlwaysVisible}]       
                                   
export const ClientSettingData = [ {id:1, name:'option.login',typeicon:'font-awesome', mobileIcon:'sign-in', menu: ContantToolbar.SignIn, typeEnabled : TypeEnabledSettings.SigninUser},
                                   {id:2, name:'option.verify',typeicon:'font-awesome', mobileIcon:'check', menu: ContantToolbar.ConfirmCode, typeEnabled : TypeEnabledSettings.SigninUser},
                                   {id:3, name:'option.waytopay', typeicon:'font-awesome-5',mobileIcon:'wallet', menu: ContantToolbar.Wallet, typeEnabled : TypeEnabledSettings.UserNotRegister},
                                   {id:4, name:'option.payment',  typeicon:'font-awesome-5',mobileIcon:'money-bill-alt', menu: ContantToolbar.Payment, typeEnabled : TypeEnabledSettings.UserNotRegister},
                                   {id:5, name:'option.payment.history',  typeicon:'font-awesome-5', mobileIcon:'list-alt', menu: ContantToolbar.PaymentHistory, typeEnabled : TypeEnabledSettings.UserNotRegister},
                                   {id:6, name:'option.change.password',  typeicon:'font-awesome-5', mobileIcon:'key', menu: ContantToolbar.ChangePassword , typeEnabled : TypeEnabledSettings.UserNotRegister},
                                   {id:7, name:'option.logoff',  typeicon:'font-awesome', mobileIcon:'sign-out', menu:ContantToolbar.SignOff, typeEnabled : TypeEnabledSettings.UserNotRegister}]    