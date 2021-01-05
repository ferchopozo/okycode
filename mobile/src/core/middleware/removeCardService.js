import React from 'react'
import { BackendUrl } from '../envrioment/constants'
//import { SERVICE_URL,SERVICE_API_KEY } from 'react-native-dotenv'


export const RemoveCardService = {
   remove: async function (customer, card)  {
        let result = null

        try {
          const backendUrl = process.env.SERVICE_URL
          const apiKey = process.env.SERVICE_API_KEY
          const url = `${backendUrl}/card`
          
          const opc = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": `${apiKey}`
            },
            body: JSON.stringify({
              customerId: customer,
              cardId: card
            })
          }

          const response = await fetch(url, opc)
          result = await response.json() 
          result = result.message
        } catch (error) {
            result = null;
            console.error(error);
        }

        return result
    }
}
