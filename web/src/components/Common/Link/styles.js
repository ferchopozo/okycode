import styled from 'styled-components'
import { SmallDevice } from '../../../core/enviorment/Constants'
import { HoverLink } from '../../../style/GlobalColor'

export const Container = styled.a`
    font-size: 16px;
    text-decoration: underline;
    :hover {
        color: ${HoverLink};
        cursor: pointer;
    }
    @media (max-width: ${SmallDevice}) {
      font-size: 14px;
    }
`