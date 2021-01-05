import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native-elements'
import { useDispatch } from 'react-redux'

import { Styles } from './styles'
import { PickerCardSelected as Actiontype } from '../../../core/redux/action.types'

export const PickerCard = ({ title, data, value,onChange, errorMessage = '' }) =>{
   
    const { t } = useTranslation()
    const refText = useRef()
    const [ enabledPicker, setEnabledPicker] = useState(false)
    const [ selectedValue, setSelectedValue] = useState();
    const [ selectedText, setSelectedText ] = useState(t('picker.card.notSelected'))
    const dispatch = useDispatch()
    const renderPicker =  () => data.map((item) => <Picker.Item key={item.id} label={`${item.last4} ${item.name}`} value={ item.id } />)
    const handleChangecard = (value, index) =>{
            const labelSelected = `${data[index].last4} ${data[index].name}`
            setSelectedValue(value)
            setSelectedText(labelSelected)
    } 
    const handleFocus = ()=>{
        setEnabledPicker(true)
        
        if(!value){
            if(data.length > 0){
                setSelectedValue(data[0].id)
                setSelectedText(`${data[0].last4} ${data[0].name}`)
            }
        }
    }

    const handleOnPickCard = ()=>{ setEnabledPicker(false) }

    useEffect(()=>{
        setSelectedValue(value) //--> init value
    },[])

    useEffect(()=>{
        value = selectedValue //--> change value
        if(onChange && value){
            const filterData =  data.filter((temp) => temp.id === value)
            dispatch({type: Actiontype, payload: filterData[0] })
            onChange(value)
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
                            <Button title={t('ready')} type="clear"  titleStyle={Styles.buttonPicker} onPress={()=>handleOnPickCard()} />
                        </View>
                    </View>
                }
                {!enabledPicker && <Text style={Styles.error} >{errorMessage}</Text> }
                
           </View>
       
}