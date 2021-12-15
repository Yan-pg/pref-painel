import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .ReactModal__Overlay--after-open {
        background: ${(props) => props.theme.colors.lightGreen};
    }

    body {
        background: ${(props) => props.theme.colors.backgroundPage};
        color: ${(props) => props.theme.colors.lighGray};
        overflow-x: hidden;

    }

     body::-webkit-scrollbar {
         width: 6px; 
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.lightGreen};
        border-radius: 20px;
        border: none;
    } 

    ul {
        list-style: none;
        padding-left: 0;
    }

    body, input, button {
        font-family: ${(props) => props.theme.fonts["font-family"]};
        font-weight:${(props) => props.theme.fonts["font-weight"]} ;
        font-size: ${(props) => props.theme.fonts["font-size"]};
    }
    
    a {
      text-decoration: none;
        color: ${(props) => props.theme.colors.lighGray};
    }
`;
