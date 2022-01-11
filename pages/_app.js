import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,body {
    width:100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
  
}
.container{
  display:flex;
  flex-direction: column;
  padding:15px;
}
  
`

const theme = {
  colors: {
    primary: '#ffff',
    secondary: '#f8f8f8',
    darkBG: '#161d31',
    darkComponent: '#18243c',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
