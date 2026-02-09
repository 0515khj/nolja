// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif; /* 기본 폰트 설정 */
    font-size: 16px;
    color: #333; 
    background-color: #fff; 
  }

  ul, ol, li {
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    object-fit:cover;
    display: block;
  }
  .section-title {
    width: 90%;
    max-width: 1400px;
    margin-bottom: 50px;
  }
  .container {
    width: 90%; 
    max-width: 1400px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;