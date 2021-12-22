import React from 'react'
import { createGlobalStyle } from 'styled-components';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-size: 10px;
    font-family: Helvetica;
    background: rgb(245, 245, 245);
    margin: 0;
  }
`

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Main />
    </div>
  );
}

export default App;
