import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  html {
    @media (max-width: 1024px) {
      font-size: 93.75%;
    }

    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Segoe UI', 'Helvetica Neue', 'Helvetica', sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: inherit;    
    cursor: pointer;    
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  
  
`
