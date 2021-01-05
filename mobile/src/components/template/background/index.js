import React, {useEffect} from 'react'
import { View } from 'react-native'
import BackgroundTimer from 'react-native-background-timer'

export const  BackGround = ({handleBackGround, timer}) =>{
    useEffect(()=>{
        BackgroundTimer.runBackgroundTimer(() => {            
                if( handleBackGround!==null ){
                    handleBackGround();
                }
            },timer);
    },[])
    return(
        <View></View>
    )
}