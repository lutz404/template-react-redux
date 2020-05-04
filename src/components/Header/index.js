import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Content, Profile } from "./styles";
import { Hidden, Visible } from "react-grid-system";

import Menu from "../Menu";

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Menu />
          <Hidden xs>
            <Link to="/dashboard">Dashboard</Link>
          </Hidden>
          <Visible xs>
            <Link to="/dashboard">Mobile version</Link>
          </Visible>
        </nav>
        <aside>
          <Profile>
            <Hidden xs>
              <div>
                <strong>{profile.nick}</strong>
                <Link to="/profile">Meu perfil</Link>
              </div>
            </Hidden>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
