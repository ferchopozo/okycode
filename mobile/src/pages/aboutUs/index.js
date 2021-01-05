import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Image } from 'react-native-elements'

import { Layout } from '../../components/template/layout'
import { Header } from '../../components/template/header'
import { Slogan } from '../../components/template/slogan'
import { Styles } from  './style'
import { ContantToolbar } from '../../core/envrioment/constants'
import { BackgroundAbout } from '../../core/style/globalColor'


export const  AboutUs = ()=>{
    const data = useSelector(state => state.company)
    const windowHeight = Dimensions.get('window').height;
    const { t } = useTranslation()
    const renderImages = ()=>{ 
        return data.about.smallImages.map((item, index) => (item.url!==null && <Image key={index} source={{ uri: item.url }} style={Styles.itemImage}/>))
    }

    return(
       <Layout page={ ContantToolbar.About } backgroundColor={BackgroundAbout} navigatorColor={BackgroundAbout} >
           <Header title={t(data.about.title)} backgroundColor={BackgroundAbout} height={windowHeight*.20}>     
                 <Text style={Styles.subtitle}>{t(data.about.subTitle)}</Text>
                 <Text style={Styles.hello}>!Hello</Text>
           </Header>
           <View style={Styles.body}>
            <ScrollView >
                    <Text style={Styles.description}>
                        {t(data.about.description)}
                    </Text>
                    <View style={Styles.images}>
                       {renderImages()}
                    </View>
                    <View style={{height:200}}>

                    </View>
                    {/*  */}
            </ScrollView>
           </View>
           <View style={Styles.slogan}>
              <Slogan width='210' height='25' />
           </View>       
       </Layout>
    )
}