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
        box-shadow: none;
        
    } 


    }
    body {
        background: ${(props) => props.theme.color.background};
        color:  ${(props) => props.theme.color['base-text']};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        ${RobotoFont}
        font-size: 1rem;
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
