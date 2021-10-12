import { css } from '@emotion/react'
import styled from '@emotion/styled'

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
  }

  a {
    text-decoration: none;
    color: #333;
  }
`

export default GlobalStyles