import React from 'react'
//import { SERVICE_URL,SERVICE_API_KEY } from 'react-native-dotenv'


export const CompanyService = {
   get: async function ()  {
        let items = null

        console.log('AA', process.env.SERVICE_URL)
        try {
          const backendUrl = process.env.SERVICE_URL
          const apiKey = process.env.SERVICE_API_KEY
          const url = `${backendUrl}/company/default`

          const opc = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": `${apiKey}`
            }
          }
          let response = await fetch(url, opc)
          const json = await response.json()
          items = json.message
        } catch (error) {
            items = null;
            console.error(error);
        }

        return items
    }
}
