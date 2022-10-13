import { createGlobalStyle } from 'styled-components'
import { RobotoFont } from './typography'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.color['green-500']};
        
    } 

    button {
        cursor: pointer;
    }
    body {
        background: ${({ theme }) => theme.color['gray-800']};
        color:  ${({ theme }) => theme.color['gray-100']};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font-family: ${({ theme: { typography } }) =>
          typography.font['font-family']};
        font-size: ${({ theme }) => theme.typography.sizes.s}
    }

    img{
        display: block;
        max-width: 100%;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
`
