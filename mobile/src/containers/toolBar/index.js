import React from 'react'
import { View, FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'

import { ButtonBar  } from '../../components/template/buttonBar'
import { Styles } from './style'
import { ToolBarData as buttons} from '../../core/data/'

export const ToolBar = ({page, handlePress})=>{
    const { t } = useTranslation()
    const dynamicWidth = (100/buttons.length)
    
    return(
       <View style={Styles.container}>
         <FlatList  
                  scrollEnabled ={false}s
                  data={buttons} 
                  numColumns ={buttons.length}
                  keyExtractor={item => item.id}
                  renderItem = {({item})=>{                  
                                  return (<ButtonBar text={t(item.text)} 
                                                      icon={item.icon} 
                                                      typeIcon={item.typeIcon}
                                                      color = {item}
                                                      width = {`${dynamicWidth}%`} 
                                                      size = {item.size}
                                                      handleOnPress = {()=>{
                                                         if(handlePress !== null){
                                                            handlePress(item.id)
                                                         }
                                                      }}
                                                      selected ={page === item.id?true:false}
                                          />)}}
         />   
        </View>
     )
}