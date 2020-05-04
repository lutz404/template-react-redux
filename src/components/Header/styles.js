import styled from "styled-components";

export const Container = styled.div`
  /*background: linear-gradient(-90deg, #770D52, #10698B);*/
  /*background: linear-gradient(-90deg, #594a95, #73398d);*/
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 0 30px;
  /*box-shadow: 0px 7px 10px -4px rgba(0, 0, 0, 0.45);*/
  font-family: "Raleway";
  background: radial-gradient(circle at top center, #564f74 0, #2f2a40 100%);
`;

export const Content = styled.div`
  height: 64px;
  /*max-width: 900px;*/
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    #botao {
      font-size: 20px;
      color: #fff;
      margin-right: 20px;
    }
    a {
      font-weight: 400;
      color: #fff;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #ffffff66;
  div {
    text-align: right;
    margin-right: 15px;
    margin-top: 3px;
    strong {
      display: block;
      color: #fff;
      font-weight: 500;
      letter-spacing: 0px;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #f0f0f0;
    }
  }
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #00000044;
    box-shadow: 0px 7px 10px -4px rgba(0, 0, 0, 0.45);
  }
`;
