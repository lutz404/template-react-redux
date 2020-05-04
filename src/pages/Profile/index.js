import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";

import Layout from "../_layouts/default";

import { signOutRequest } from "../../store/ducks/auth";

export default function Perfil() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Container>
        <div
          style={{
            textAlign: "center",
            fontFamily: "Roboto Slab",
            fontSize: 36,
            marginBottom: 20
          }}
        >
          {profile.nome}
        </div>
        <Link to="/editprofile">
          <button className="btn1">Atualizar perfil</button>
        </Link>
        <button className="btn1">Atualizar senha</button>

        <hr
          className="espacamento"
          style={{ marginTop: 30, marginBottom: 25 }}
        />

        <button
          type="button"
          className="logout"
          onClick={() => dispatch(signOutRequest())}
        >
          Logout
        </button>
      </Container>
    </Layout>
  );
}
