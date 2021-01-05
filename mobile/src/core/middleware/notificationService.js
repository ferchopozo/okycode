import React from 'react'
import { BackendUrl } from '../envrioment/constants'



export const NotificationService = {
   get: async function (token,deviceId)  {

        let items;

        try {
          const url = `${BackendUrl}api/getnotifications`
          const opc = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
              device: deviceId
            })
            
          }

          let response = await fetch(url, opc)
          
          items = await response.json()
          items = items.results
        } catch (error) {
            items = null;
            console.error(error);
        }

        return items
    }
}
