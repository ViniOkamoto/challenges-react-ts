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

    
    @media (max-width: 640px) {
    html {
        font-size: 80%;
    }

    }
    body {
        background: ${(props) => props.theme.color.backgrorund};
        color:  ${(props) => props.theme.color['base-text']};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        ${RobotoFont}
        font-size: 1rem;
    }
`
