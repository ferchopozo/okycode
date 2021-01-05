//import { SERVICE_URL,SERVICE_API_KEY } from 'react-native-dotenv'


export const GetOnePayment = {
   get: async function (payment)  {
        let items = null

        try {
          const backendUrl = process.env.SERVICE_URL
          const apiKey = process.env.SERVICE_API_KEY
          const url = `${backendUrl}/payment/one`
          
          const opc = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": `${apiKey}`
            },
            body: JSON.stringify({
                paymentId: payment
            })
          }

          let response = await fetch(url, opc)   
          const data  = await response.json()
          const message = data.message

          if( message.success){
                  items = message.object
          }else{
              items = []
          }

        } catch (error) {
            items = null;
            console.error(error);
        }

        return items
    }
}
