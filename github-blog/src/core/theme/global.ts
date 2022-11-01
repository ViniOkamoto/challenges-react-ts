import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: none;
        
    } 

    button {
        cursor: pointer;
    }
    body {
        background: ${(props) => props.theme.color['base-background']};
        color:  ${(props) => props.theme.color['base-text']};
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button{
        font-family: ${({ theme }) => theme.typography.font['font-family']};
        font-size: 1rem;
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
