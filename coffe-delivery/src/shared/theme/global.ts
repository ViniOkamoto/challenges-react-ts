import { createGlobalStyle } from 'styled-components'

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
    ::-webkit-scrollbar {
        height: 8px; 
        width: 8px; 
    }

    
    @media (max-width: 640px) {
    html {
        font-size: 70%;
    }
    }
    body {
        background: ${(props) => props.theme.backgrorund};
        color:  ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
