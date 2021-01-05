import styled from 'styled-components'
import { SmallDevice } from '../../../core/enviorment/Constants'

export const Svg = styled.svg`
  margin: 20px;
  max-width: 180px;
  max-height: 70px;
  width: 100%;
  height: 100%;

  @media (max-width: ${SmallDevice}) {
    margin: 10px;
    width: 100%;
    height: 100%;
    /* border: 5px solid red; */
   }
`
