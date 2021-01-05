import React, {useEffect} from 'react'
import {View, SafeAreaView} from 'react-native'
import { useDispatch } from 'react-redux'

import { Styles } from './style'
import { Isotype } from '../../components/template/isotype'
import { Provider } from '../../components/template/provider'
import { CompanyService as Actiontype } from '../../core/redux/action.types'
import { CompanyService } from '../../core/middleware/companyService'

export const Init = ({navigation}) =>{
    const dispatch = useDispatch()
    useEffect( ()=>{ 
      //
       (async()=>{
          const response = await CompanyService.get();
          
          if( null != response){
            dispatch({type: Actiontype, payload:response })
            navigation.navigate("home")
          }else{
            navigation.navigate("noConnection")
          }
       })()
       //
     },[])

    return(
      <SafeAreaView style={Styles.container}>
            <View style={Styles.containerLogo}>
                <Isotype width={60} height={60}  />
            </View>
            <View style={Styles.containerFooter}>
              <Provider width={94} height={41}  />
            </View>
      </SafeAreaView>
    )
}