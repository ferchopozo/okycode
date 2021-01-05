import styled from 'styled-components'
import { SmallDevice } from '../../../core/enviorment/Constants'


export const Svg = styled.svg`
  max-width: 180px;
  max-height: 100px;
  margin-top: 15px;

  @media (max-width: ${SmallDevice}) {
    max-width: 120px;
    max-height: 60px;
    margin-top: 15px;
  }
`
