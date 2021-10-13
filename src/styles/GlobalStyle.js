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

  html {
    font-size: 24px;
    background: whitesmoke;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyles