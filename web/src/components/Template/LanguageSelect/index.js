import React from 'react'
import {
  List,
  ContainerItem,
  Image,
  Link
} from './styles'
import { itemsLanguage } from '../../../data'

export const LanguageSelect = ({text}) => {
  const handleChangeLanguage = (e) => {}
  const template = (option) => {
    if (!option.value) {
      return option.label
    } else {
      return (
        <Link  key={option.value} to={`${option.path}`}  >
          <ContainerItem className='p-clearfix'>
              <Image src={option.icon}  alt={option.label} />
              {option.label}
          </ContainerItem>
        </Link>
      )
    }
  }
 
  return (
    <List
      itemTemplate={template}
      options={itemsLanguage}
      onChange={handleChangeLanguage}
      placeholder={text}
    />
  )
}

