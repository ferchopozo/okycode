import React from 'react'
import { useGoogleMaps } from "react-hook-google-maps"
import { Container } from './styles'

export const MapBusiness = ()=>{
    const googleApiKey = process.env.GATSBY_GOOGLE_API_KEY
    const googleLat = parseFloat(process.env.GATSBY_GOOGLE_LAT)
    const googleLng = parseFloat(process.env.GATSBY_GOOGLE_LNG)
    const coordenates = { lat: googleLat, lng: googleLng };
    const { ref, map, google } = useGoogleMaps(
       googleApiKey,
        {
          center:coordenates,
          zoom: 17,
        },
      )

      if (map) {
        new google.maps.Marker({ position: coordenates, map });
      }
    
      return <Container ref={ref} />
      
}