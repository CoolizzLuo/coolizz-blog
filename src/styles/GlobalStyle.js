import { css } from '@emotion/react'

const GlobalStyles = css`
  @font-face {
    font-family: Cyber;
    src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
    font-display: swap;
  }
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Cyber", Futura, sans-serif;
    box-sizing: border-box;
    color: #333;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: rgb(219,219,219);
  }

  html {
    font-size: 24px;
    background: whitesmoke;
  }

  body {
    margin: 32px 0 0;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyles