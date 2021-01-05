import React,{ useState,useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { ServiceService } from '../core/middleware/serviceService'
import { ListOfService } from '../components/template/listOfService'


export const ListOfServiceContainer = () =>{
    const [ services, setServices ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const category = useSelector(state => state.category)

    useEffect(()=>{
        ( async()=>{  
           setLoading(true)
           const items = await ServiceService.get(category.id);
           setServices(items.services)
           setLoading(false)
        })()
    },[])
    return <ListOfService items={services} loading={loading} />
}