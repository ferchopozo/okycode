import * as React from 'react'
import { Svg } from './styles'
import { Link } from '@reach/router'

export const LogoStatic = props => {
  return (
    <Link to='/'>
      <Svg viewBox='0 0 781.49 139.2'>
        <defs>
          <filter
            id='prefix__AI_SombrasDeInglete_1'
            x='-20%'
            y='-20%'
            width='140%'
            height='140%'
          >
            <feGaussianBlur result='blur' stdDeviation={4} in='SourceAlpha' />
            <feOffset result='offsetBlur' dx={4} dy={4} in='blur' />
            <feSpecularLighting
              result='specOut'
              surfaceScale={5}
              specularExponent={10}
              in='blur'
            >
              <fePointLight x={-5000} y={-10000} z={-20000} />
            </feSpecularLighting>
            <feComposite
              result='specOut'
              operator='in'
              in='specOut'
              in2='SourceAlpha'
            />
            <feComposite
              result='litPaint'
              operator='arithmetic'
              k2={1}
              k3={1}
              in='SourceGraphic'
              in2='specOut'
            />
            <feMerge>
              <feMergeNode in='offsetBlur' />
              <feMergeNode in='litPaint' />
            </feMerge>
          </filter>

        </defs>
        <g id='prefix__Capa_2' data-name='Capa 2'>
          <g id='prefix__Capa_1-2' data-name='Capa 1'>
            <text

              transform='matrix(.92 0 0 1 0 109.78)'
              fontSize={102}
              fill='#ce3517'
              fontFamily='Arial-Black,Arial Black'
              fontWeight={800}
              filter='url(#prefix__AI_SombrasDeInglete_1)'
            >
              {'<'}
            </text>
            <text

              transform='matrix(.92 0 0 1 704.09 109.78)'
              fontSize={102}
              fill='#ce3517'
              fontFamily='Arial-Black,Arial Black'
              fontWeight={800}
              filter='url(#prefix__AI_SombrasDeInglete_1)'
            >
              {'>'}
            </text>
            <text
              transform='translate(75 102.55)'
              fontSize={102}
              fill='#1a85c8'
              fontFamily='Arial-Black,Arial Black'
              fontWeight={800}
              filter='url(#prefix__AI_SombrasDeInglete_1)'
            >
              {'O'}
              <tspan x={84.97} y={0} letterSpacing='.02em'>
                {'k'}
              </tspan>
              <tspan x={154.74} y={0} letterSpacing={0}>
                {'y - Code'}
              </tspan>
            </text>
          </g>
        </g>
      </Svg>
    </Link>
  )
}

export default LogoStatic
