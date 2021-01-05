import React from 'react'
import { View, Text, ScrollView, SafeAreaView,Dimensions } from 'react-native'
import { Image } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { Layout } from '../../components/template/layout'
import { ListOfServiceContainer } from '../../hoc/listOfServiceContainer'
import { Styles } from './style'
import { BackgroundCategory } from '../../core/style/globalColor'
import { ContantToolbar } from '../../core/envrioment/constants'
import { Header } from '../../components/template/header'
import { Body } from '../../components/template/body'

export const Category = () => {
    const category = useSelector(state => state.category)
    const { t } = useTranslation()
    const windowHeight = Dimensions.get('window').height;

    return (
        <Layout page={ ContantToolbar.Home } backgroundColor={BackgroundCategory} navigatorColor={BackgroundCategory} >
            <ScrollView style={{flex: 1}}>
                {/* <ScrollView  style={{ flex: 1 }} >  */}
                    <Header title={t(category.name)} backgroundColor={category.colorName} height={windowHeight*.1} />
                    <View style={Styles.headerImage}>
                        <Image source={{ uri: category.headerImage }} style={Styles.image}  />
                    </View>
                    <Body minHeight={windowHeight*.15} >
                        <View style={Styles.bodyRectangle} >
                            <View style={[{backgroundColor:category.backgroundColor}, Styles.rectangle]}>
                                {/* Space in body */}
                            </View>
                        </View>
                        <View style={Styles.bodyText}>
                            <Text style={{textAlign: 'justify'}} >
                               {t(category.description)}
                            </Text>
                        </View>
                    </Body>
                    <View style={Styles.services}>
                        <Text style={Styles.textService}>{t('services.category.legend')}</Text>
                        <ListOfServiceContainer  /> 
                        <View style={{height:100}} >
                        </View>
                    </View>
             </ScrollView>
        </Layout>
    )
}