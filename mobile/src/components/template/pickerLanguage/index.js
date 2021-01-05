import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-elements'
import i18n from 'i18next'

import { Styles } from './styles'
import { PickerCardSelected as Actiontype } from '../../../core/redux/action.types'
import { LanguageData as data } from '../../../core/data'

export const PickerLanguage = ({ title, value, onPickerLanguage }) =>{
   
    const { t } = useTranslation()
    const refText = useRef()
    const [ enabledPicker, setEnabledPicker] = useState(false)
    const [ selectedValue, setSelectedValue] = useState();
    const [ selectedText, setSelectedText ] = useState(t('change.language.notSelected'))
    const renderPicker =  () => data.map((item) => <Picker.Item key={item.id} label={item.name} value={ item.id } />)
    const handleChangecard = (value, index) =>{
            const labelSelected = data[index].name
            setSelectedValue(value)
            setSelectedText(labelSelected)
    } 
    const handleFocus = ()=>{
        setEnabledPicker(true)
        
        if(!value){
            if(data.length > 0){
                setSelectedValue(data[0].id)
                setSelectedText(data[0].name)
            }
        }
    }

    const handleOnPickLanguage = ()=>{ 
        setEnabledPicker(false)

        if(onPickerLanguage){
            onPickerLanguage(value)
        }
    }

    useEffect(()=>{
        setSelectedValue(i18n.language) //--> init value
        const filterData =  data.filter((temp) => temp.id === i18n.language)
        if(filterData.length > 0){
            setSelectedText(filterData[0].name)
        }
    },[])

    useEffect(()=>{
        value = selectedValue //--> change value
        if(value){
            const filterData =  data.filter((temp) => temp.id === value)
        }
    },[selectedValue])

    return <View style={Styles.container} >
                <Text style={Styles.title} >{title}</Text>
                {!enabledPicker ?     
                    <TextInput  ref={refText}
                                style={ Styles.label } 
                                onFocus = {() => handleFocus()}
                                value={selectedText} />
                    :
                    <View>
                        <View style={Styles.containerPicker} >
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{width: '100%', height: 64}} itemStyle={{height: 100}}
                                    onValueChange={(itemValue, itemIndex) => handleChangecard(itemValue, itemIndex)}>
                                        {renderPicker()}
                                </Picker>
                        </View>
                        <View style={Styles.containerPickerButton}>
                            <Button title={t('ready')} type="clear"  titleStyle={Styles.buttonPicker} onPress={()=>handleOnPickLanguage()} />
                        </View>
                    </View>
                }
           </View>
       
}