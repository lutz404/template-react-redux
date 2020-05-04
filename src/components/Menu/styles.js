import styled, { css, keyframes } from "styled-components";
import PerfectScrollBar from "react-perfect-scrollbar";
import { fadeInLeft, fadeOutLeft, fadeIn, fadeOut } from "react-animations";

const inTransition = keyframes`${fadeInLeft}`;
const outTransition = keyframes`${fadeOutLeft}`;
const inTransitionBack = keyframes`${fadeIn}`;
const outTransitionBack = keyframes`${fadeOut}`;

const aberto = css`
  visibility: visible;
  animation: 0.5s ${inTransition};
`;
const fechado = css`
  visibility: hidden;
  animation: 0.2s ${outTransition};
  transition-delay: 0.2s;
`;
const abertoBack = css`
  visibility: visible;
  animation: 0.5s ${inTransitionBack};
`;
const fechadoBack = css`
  visibility: hidden;
  animation: 0.2s ${outTransitionBack};
  transition-delay: 0.2s;
`;

export const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  z-index: 5;
  background: rgba(0, 0, 0, 0.4);

  ${props => (props.visible ? abertoBack : fechadoBack)}
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 270px;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  border-right: #ddd;
  box-shadow: 3px 0px 6px 0px rgba(0, 0, 0, 0.3);
  z-index: 6;

  ${props => (props.visible ? aberto : fechado)}
`;

export const MenuHeader = styled.div`
  background: #000;
  width: 100%;
  height: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const MenuContent = styled(PerfectScrollBar)`
  max-height: 500px;
  padding: 5px 0px;

  div {
    padding: 10px;
    display: flex;
    align-items: center;

    &:hover {
      background: #ddd;
      font-weight: 500;
    }

    svg {
      color: #000;
      font-size: 25px;
      padding-right: 10px;
    }
  }
`;
