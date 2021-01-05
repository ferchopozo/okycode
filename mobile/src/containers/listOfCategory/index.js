import React from 'react'
import { View, ScrollView, FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'

import { Category } from '../../components/template/category'
import { Styles } from './style'
import { Loading } from '../../components/template/loading'

export const ListOfCategory = ({items, loading = false})=>{
    const typeIcon = 'font-awesome'
    const { t } = useTranslation()
    const renderItem = (item) => <Category text={t(item.name)} icon={item.mobileIcon}
                                        typeIcon={typeIcon}
                                        color={item.colorName}
                                        data ={item}
                                        />
    return (!loading?<View style={Styles.container}>
              <FlatList data={items} 
                      keyExtractor = {(item, index) => index.toString()}
                      renderItem={({item})=>renderItem(item)}
                      numColumns ={1}
                      scrollEnabled = {true}
                      horizontal={false}/> 
            </View>: <Loading color='white' />)
}