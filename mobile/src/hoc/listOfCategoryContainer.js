import React,{ useState,useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { CategoryService } from '../core/middleware/categoryService'
import { ListOfCategory } from '../containers/listOfCategory'

export const ListOfCategoryContainer = () =>{
    const [ categories, setCategories ] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        ( async()=>{
            setLoading(true)
            const items = await CategoryService.get();
            setCategories(items)
            setLoading(false)
        })()
    },[])
    return <ListOfCategory items={categories} loading={loading} />
}