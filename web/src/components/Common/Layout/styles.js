import styled from 'styled-components'
import { BackgroundColor } from '../../../style/GlobalColor'

export const Container = styled.div`
 min-height:  75vh;
 max-height: 100%;
 background-color: ${(props) => {
     let returnColor = BackgroundColor
     if (props.background !== null && props.background !== undefined) { returnColor = props.background }
     return returnColor
 }};
`
