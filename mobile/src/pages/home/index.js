import React from 'react'
import {View} from 'react-native'

import { Layout } from '../../components/template/layout'
import { ListOfCategoryContainer } from '../../hoc/listOfCategoryContainer'
import { Logo } from '../../components/template/logo'
import { OurService } from '../../components/template/ourService'
import { Slogan } from '../../components/template/slogan'
import { Styles } from './style'
import { ContantToolbar } from '../../core/envrioment/constants'


export const Home = ()=>{
    return(
        <Layout page={ContantToolbar.Home} >
           <View style={Styles.container}>
                <View style={Styles.header}>
                    <Logo width={180} height={90} />
                </View>
                <View style={Styles.body}> 
                    <OurService />
                    <ListOfCategoryContainer />
                </View>
                <View style={Styles.footer} >
                    <Slogan width='210' height='25' />
                </View> 
            </View>
        </Layout>
    )
}