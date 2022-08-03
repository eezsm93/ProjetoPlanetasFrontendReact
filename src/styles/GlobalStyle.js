import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    
    font-family: 'Montserrat', sans-serif;
    a, p, h1, h2, h3, h4, h5 {
        margin: 0;
        padding: 0;
    }

    div, section{
        box-sizing: border-box;
    }
}


body {
    padding: 0px;
    margin: 0px;
    font-size: 100%;
    background-color: #F2FDFC
}

@media(max-width: 1080px){
  html{
  font-size: 93.75%;
}
}

@media(max-width: 720px){
  html{
  font-size: 87.5%;
}
}`;

export default GlobalStyle;
