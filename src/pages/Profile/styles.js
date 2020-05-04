import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 650px;
  padding: 15px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.2);

  > button {
    width: 100%;
    margin: 5px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#f64c75")};
    }
  }

  .btn1 {
    margin: 5px 0 0;
    height: 44px;
    background: #eee;
    font-weight: bold;
    color: #222;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    width: 100%;

    &:hover {
      background: ${darken(0.03, "#fff")};
    }
  }

  .avatar {
    background: #333;
    font-family: Roboto;
    width: 150px;
    height: 150px;
    margin: auto;
    border-radius: 50%;
    border: 2px solid #37517e;
    cursor: hand;
    margin-bottom: 25px;
  }
  .avatar:hover {
    border: 2px solid #00a4df;
  }
`;
