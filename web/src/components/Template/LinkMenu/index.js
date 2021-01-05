import React from 'react' 
import {
  Text,
  Link
} from './styles'

export const LinkMenu = ({ id, name, path, activate = false }) => {
  return (
    <>
      <Link id={id} className={`linkIcon${activate?' primary':''}`} 
            rel="canonical"
            to={path} >
        <Text>{name}</Text>
      </Link>
    </>
  )
}
