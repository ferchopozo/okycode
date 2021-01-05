import React from 'react'
import { ScrollView, View, Text, Dimensions } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Image } from 'react-native-elements'

import { Layout } from '../../../components/template/layout'
import { Header } from '../../../components/template/header'
import { Provider } from '../../../components/template/provider'
import { Styles } from  './style'
import { ContantToolbar } from '../../../core/envrioment/constants'
import { ImagesAboutMe } from '../../../core/data'

export const  AboutMe = ()=>{
    const windowHeight = Dimensions.get('window').height;
    const { t } = useTranslation()
    const renderImages = ()=>{ 
        
        return ImagesAboutMe.map((item, index) => {
            return item.url!==null && <Image key={index} source={item.image} style={Styles.itemImage}/>
        })
    }

    return(
       <Layout page={ ContantToolbar.More } backgroundColor={'white'} navigatorColor={'white'} >
           <Header title={t('about.appcms.title')} backgroundColor={'white'} height={windowHeight*.1}>     
                 <Text style={Styles.subtitle}>{t('about.appcms.subTitle')}</Text>
           </Header>
           <View style={Styles.body}>
            <ScrollView >
                    <Text style={Styles.description}>
                        {t('about.appcms.description')}
                    </Text>
                    <Text style={Styles.label}>{t('about.appcms.technology')}</Text>
                    <View style={Styles.images}>
                     
                       {renderImages()}
                    </View>
                    <View style={{height:200}}>

                    </View>
                    {/*  */}
            </ScrollView>
           </View>
           <View style={Styles.slogan}>
                 <Provider width={94} height={41}  />
           </View>       
       </Layout>
    )
}