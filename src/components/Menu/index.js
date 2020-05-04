import React, { useState, useEffect } from "react";
import { MenuContainer, MenuHeader, MenuContent, Background } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";

import {
  RiHome3Line,
  RiArticleLine,
  RiCodeSSlashLine,
  RiTeamLine,
  RiMessage2Line,
  RiUserAddLine
} from "react-icons/ri";

export default function Menu() {
  const [visible, setVisible] = useState(false);

  function toogleMenu() {
    setVisible(!visible);
  }

  useEffect(() => {
    document.documentElement.onclick = function(event) {
      var menuId = document.getElementById("menu");
      var botaoId = document.getElementById("botao");
      if (
        event.target !== menuId &&
        !menuId.contains(event.target) &&
        event.target !== botaoId
      ) {
        //alert('Clicou fora do menu');
        setVisible(false);
      }
    };
  }, []);

  return (
    <>
      <AiOutlineMenu onClick={toogleMenu} id="botao" />

      <MenuContainer visible={visible} id="menu">
        <MenuHeader>
          Oncologia
          <br />
          COVID-19
        </MenuHeader>
        <MenuContent>
          <div>
            <RiHome3Line />
            Home
          </div>
          <div>
            <RiArticleLine />
            Artigos
          </div>
          <div>
            <RiCodeSSlashLine />
            Metodologia
          </div>
          <div>
            <RiTeamLine />
            Quem somos
          </div>
          <div>
            <RiMessage2Line />
            Contato
          </div>
          <div>
            <RiUserAddLine />
            Quero ajudar
          </div>
        </MenuContent>
      </MenuContainer>

      <Background visible={visible} />
    </>
  );
}
