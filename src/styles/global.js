import { createGlobalStyle } from "styled-components";
import { darken } from "polished";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";

const corDefault = "#e1e1e1";
const corPrimary = "#594A95";
const corButton = "#594A95";
const borderDefault = "#e1e1e1";
const corHover = "#bbb";
const corActive = "#666";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,500i,600,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,600,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;1,300&display=swap');
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        color: #000;
        font-family: 'Roboto', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        /* Scrollbar Width */
        ::-webkit-scrollbar {
            width: 10px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #888; 
        }
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }
    }
    html, body, #root {
        min-height: 100%;
    }
    input, button {
        font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
    /* ////////////////////   FORM   /////////////////////// */
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .formTitle{
        font-family: 'Raleway Semibold';
        font-size: 28px;
        color: #37517E;
        margin: 15px 0 20px 0;
    }
    .INPUT {
        .labelInput{
            font-size: 14px;
            margin-top: 5px;
            margin-bottom: 8px;
        }
        input, textarea {
            background: #fff;
            border: 1px solid ${corDefault};
            border-radius: 4px;
            height: 44px;
            padding: 15px;
            color: #111;
            margin: 0 0 10px;
            width: 100%;
            transition: 0.2s;
            &::placeholder{
                color: #bbb;
            }
            &:hover {
                border: 1px solid ${corHover};
            }
            &:focus{
                border: 1px solid ${corActive};
                box-shadow: 0px 0px 4px ${corHover};
                color: #000;
            }
        }
        textarea {
            overflow: hidden;
            resize: none;
            transition: height 0.5s;
        }
        input:disabled:hover{
            color: #888;
        }
        .errorInput {
            color: #ff0000;
            margin: 0px 10px 10px 0px;
            font-size: 13px;
            font-weight: 400;
        }
        //SELECT
        .react-select__control {
            font-size: 14px;
            border: 1px solid ${corDefault};
            margin: 0 0 10px;
            input {
                height: 30px;
                padding: 0 10px;
                color: #111;
                margin: 0px;
            }
            &:hover {
                border: 1px solid ${corHover};
            }
            &:active {
            border: 1px solid ${corActive};
                box-shadow: none;
            }
        }
        .react-select__control--is-focused, .react-select__control--menu-is-open{
            border: 1px solid ${corActive};
            box-shadow: none;
        }
        .react-select__menu {
            font-size: 14px;
            border: 1px solid ${corActive};
            margin: 0 0 10px;
        }
        .react-select__option--is-selected{ /* is-disabled is-focused */
            background: ${corPrimary} !important;
        }
        //CHECKBUTTON
        .checkButton {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 35px;
            border: 1px solid #222; 
            border-radius: 4px;
            padding: 5px 10px;
            cursor: pointer;
            transition: 0.3s;
        }
        .check_false {
            background: #fafafa;
            color: #222;
        }
        .check_true {
            background: ${corPrimary};
            color: #fff !important;
        }
        
    }
    .INPUT:focus-within {
        .labelInput {
            color: ${corPrimary};
            font-weight: 500;
            transition: 0.2s;
        }
    }
    .btnSubmit {
            margin: 5px 0 0;
            height: 44px;
            background:${corPrimary};
            font-weight: 300;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.15, corPrimary)};
            }
    }
    .espacamento {
        border: 0;
        height: 1px;
        background: rgba(0,0,0,0.2);
        margin: 10px 0 20px;
    }
    ._link {
        cursor: pointer;
    }
    ._link:hover {
        color: ${corPrimary};
    }
`;
