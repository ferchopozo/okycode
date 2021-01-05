//import { SERVICE_URL,SERVICE_API_KEY } from 'react-native-dotenv'

export const AddCardService = {
   add: async function (customer, card)  {
        let result = null

        try {
          const backendUrl = process.env.SERVICE_URL
          const apiKey = process.env.SERVICE_API_KEY
          const url = `${backendUrl}/card`
          
          const opc = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": `${apiKey}`
            },
            body: JSON.stringify({
              customerId: customer.username,
              email: customer.attributes["email"],
              name: customer.attributes["custom:name"],
              lastName: customer.attributes["custom:lastName"],
              name: card.cardName,
              number: card.cardNumber,
              month: card.month,
              year: card.year,
              cvc: card.cvc,
              zipCode: card.zipCode
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
