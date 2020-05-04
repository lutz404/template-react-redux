import { call, put, delay } from "redux-saga/effects";
import { push } from "connected-react-router";
import api from "../../services/api";
import Alert from "cogo-toast";

import { loginOK, signOutOK } from "../ducks/auth";

export function* loginRequestMW(data) {
  const { email, password } = data.payload;
  try {
    const response = yield call(api.post, "user/authenticate", {
      email,
      password
    });

    yield put(loginOK(response.data));
    // loginOK é ouvido por 2 reducers: AUTH e USER
    localStorage.setItem("@APP:token", response.data.token);

    Alert.success("Bem vindo, " + response.data.user.nick, {
      hideAfter: 3,
      heading: "Login com sucesso"
    });

    yield delay(1000);
    yield put(push("/home"));
  } catch (err) {
    //console.log(err.response.data.error);
    console.log(err.response);
    //console.log(err.response.status);
    if (err.response.status === 429) {
      Alert.error("Cuidado, seu IP foi anotado. Volte a tentar em 5 minutos", {
        hideAfter: 30,
        heading: "Excesso de tentativas"
      });
      return false;
    }

    var erro = "Verifique seu e-mail / senha";
    if (err.response.data.error) erro = err.response.data.error;

    Alert.error(erro);
  }
}

export function* signOutMW() {
  try {
    yield put(signOutOK());
    yield localStorage.removeItem("@APP:token");

    yield delay(1000);
    yield put(push("/"));

    Alert.success("Até logo!");
  } catch (err) {
    Alert.error("Erro no logout");
  }
}
