import React, { useEffect } from 'react'
import {SafeAreaView, View, BackHandler} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Styles } from './style'
import { ToolBar } from '../../../containers/toolBar'
import { BackgroundGlobalColor } from '../../../core/style/globalColor'

export const Layout = ({children, page, backgroundColor= BackgroundGlobalColor, navigatorColor=BackgroundGlobalColor}) => {
    const navigation = useNavigation()
    const HandlerPress = (id)=>{
        navigation.navigate(id)
    }

    useEffect(()=>{
          const onBackPress = () => {
            console.log("Entro al metodo prevent")
            return true;
          };
      
          BackHandler.addEventListener(
            'hardwareBackPress', onBackPress
          );
      
          return () =>
          BackHandler.removeEventListener(
              'hardwareBackPress', onBackPress
            );
    },[])
    return(
        <SafeAreaView style={[{backgroundColor: backgroundColor},Styles.container]}>
              <View style={[Styles.navigator, {backgroundColor:navigatorColor}]}>
              </View>
             <View style={Styles.body}>
                  {children}
             </View>
             <View style={Styles.toolbar} > 
               <ToolBar page={page} handlePress={HandlerPress} /> 
            </View>
        </SafeAreaView>
    )
}
