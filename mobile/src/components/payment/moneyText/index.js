import React, { useRef } from 'react'
import { Text } from 'react-native'
import { Input } from 'react-native-elements'

import { Styles } from './styles'

export const MoneyText = ( props ) => {
    const inputRef = React.createRef();
    
    const correctValue = (input) => {
        input = input.replace(/[^0-9\.]/g, "") //-->quito caracteres
        
        if( input.split(".").length > 2 ){
            input = input.substring(0,input.length-1)
        }

        return input;
    }

    const verifyAmount = (input) => {
      let response = input
      let responseInt = parseInt(response)
      responseInt = responseInt !== NaN?responseInt: 0

      if(responseInt >=0){      
        response =  response.toString()
      }else {
        response = ''
      }

      return response
    }

    const  startPadding = (input)=>{
      let response = ''
      let responseInt =  parseInt(input)

      if(responseInt > 0){
        response = responseInt.toString().padStart(props.fillZero,'0')
      }

      return response
    }


    const handleChangeText = (input) => {
         let response = correctValue(input)
         response = verifyAmount(response)

         inputRef.current.setNativeProps({ text: response });
        
         if(props.onChangeText){
            props.onChangeText(response)
         }  
    }

    const handleBlur = () => {
      let currentText = inputRef.current.props.value;
      let response = startPadding(currentText)

      if(props.onBlur){
        props.onBlur(response);
      }
    }

    return (<Input {...props}
                   contextMenuHidden = { true }
                   selectTextOnFocus = { false }
                   ref={inputRef}
                   style = { Styles.textStyle }
                   labelStyle = { Styles.title }
                   inputContainerStyle = { Styles.inputStyle }
                   leftIconContainerStyle = {{ margin: 5} }
                   leftIcon={{ type: 'font-awesome', name: 'dollar', color: '#41a330', size:18 }}
                   onChangeText = { input => handleChangeText(input)} 
                   onBlur = { () =>  handleBlur()} />)
}