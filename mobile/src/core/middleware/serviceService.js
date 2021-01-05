import React from 'react'
import { BackendUrl } from '../envrioment/constants'
//import { SERVICE_URL,SERVICE_API_KEY } from 'react-native-dotenv'


export const ServiceService = {
   get: async function (category)  {
        let items = null

        try {
          const backendUrl = process.env.SERVICE_URL
          const apiKey = process.env.SERVICE_API_KEY
          const url = `${backendUrl}/service/published`
          
          const opc = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": `${apiKey}`
            },
            body: JSON.stringify({
              category: category
            })
          }

          let response = await fetch(url, opc)   
          items = await response.json()
          items = items.message
        } catch (error) {
            items = null;
            console.error(error);
        }

        return items
    }
}
