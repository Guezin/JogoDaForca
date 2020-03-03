import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%
  }

  html body {
    font: 14px Roboto, Arial, sans-serif;
    background-image: linear-gradient(-105deg, #f34bd9, #50f4e3);
  }

  button {
    cursor: pointer;
  }
`;
