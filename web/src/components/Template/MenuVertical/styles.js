import styled from 'styled-components'
import { TiThMenu } from 'react-icons/ti'
import { Sidebar } from 'primereact/sidebar'

import { ButtonSmallMenu,
         ColorMobileMenu } from '../../../style/GlobalColor'

export const IconMenu = styled(TiThMenu)`
    cursor: pointer;
    color: ${ButtonSmallMenu};
    
`

export const StaticMenu = styled(Sidebar)`
   background-color: ${ColorMobileMenu};
`