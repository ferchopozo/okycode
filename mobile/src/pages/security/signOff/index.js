import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'

import { SecurityUser } from '../../../core/redux/action.types'
import { ContantToolbar } from '../../../core/envrioment/constants'

export const SignOff = ()=>{
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const handleSignOut = async()=>{
        let isSucced = true
        try {
            await Auth.signOut()
        } catch (error) {
            isSucced = false;
            console.log('error signing out: ', error);
        }
    }
    
    useEffect(()=>{  
        (async()=>{
            await handleSignOut();
            dispatch({type: SecurityUser, payload:null })
            navigation.navigate(ContantToolbar.More)
         })()
    }, [])

    return <></>
}