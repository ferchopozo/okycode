import React, { useRef } from 'react'
import { Input } from 'react-native-elements'


import { Styles } from './styles'

export const IntegerText = ( props ) => {
    const inputRef = React.createRef();
    const correctValue = (input) => {
        input = input.replace(/[^0-9]/g, "") //-->quito caracteres
        return input;
    }

    const verifyYear = (input) => {
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
         response = verifyYear(response)
        
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
                   ref={inputRef}
                   inputContainerStyle = { Styles.inputStyle }
                   leftIconContainerStyle = {{ margin: 5} }
                   onChangeText = { input => handleChangeText(input)} 
                   onBlur = { () =>  handleBlur()}
            />)
}