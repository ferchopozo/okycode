import React from 'react'
//import { SERVICE_URL,SERVICE_API_KEY } from 'react-native-dotenv'
// import { BackendUrl, 
//          ClientId, 
//          ClientSecret } from '../../core/envrioment/constants'


export const CategoryService = {
   get: async function ()  {
        let items = null

        try {
          const backendUrl = process.env.SERVICE_URL
          const apiKey = process.env.SERVICE_API_KEY
          const url = `${backendUrl}/category/published`

          const opc = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": `${apiKey}`
            }
          }
          let response = await fetch(url, opc)
          items = await response.json();
          items = items.message;
        } catch (error) {
            items = null;
            console.error(error);
        }

        return items
    }
}
