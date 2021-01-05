import React, { useRef } from 'react'
import { Input } from 'react-native-elements'

import { Styles } from './styles'

export const CardText = (props) => {
    const inputRef = useRef(null)

    const correctValue = (input) => {  
        // input = input.replace(/ /g, "") //-->quito espacios
        // input = input.replace(/-/g, " ") //--> quito -  por espacio
        //input = input.replace(/(?! )[^0-9]/g, "") //-->quito caracteres
        input = input.replace(/[^0-9]/g, "") //-->quito caracteres

        return input;
    }

    const toFormatString = (input)=>{
        const arrayResponse = [...input]
        let response = ''
        
         for(let index=1; index<=arrayResponse.length;index++){
            const temp = arrayResponse[index-1]
            response += (index%4) !== 0? temp: temp+" "
         }
        
         return response.trim();
    }

    const handleChangeText = (input) => {
         let correctValues = correctValue(input)
         correctValues= toFormatString(correctValues)

         if(props.onChangeText){
            props.onChangeText(correctValues)
         }  
    }

    const handleBlur = (event)=>{
         if(props.onBlur){
            props.onBlur(event)
         }  
    }

    return (<Input {...props}
                   ref={inputRef}
                   inputContainerStyle = { Styles.inputStyle }
                   leftIconContainerStyle = {{ margin: 5} }
                   onChangeText = {input => handleChangeText(input)} 
                   onBlur = {event => handleBlur(event)}  
            />)
}