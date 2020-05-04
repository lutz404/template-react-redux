import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { toastr } from "react-redux-toastr";

import { updateUserSuccess } from "../ducks/user";

export function* updateUserRequest(data) {
  try {
    //const {nome, email, ...rest} = payload;
    const profile = data.payload;
    //console.log('Enviado: '+ profile);

    const response = yield call(api.put, "/user/update", profile);

    toastr.success("Perfil atualizado");
    yield put(updateUserSuccess(response.data));
  } catch (err) {
    toastr.error("Erro ao atualizar perfil", err.response.data.error);
    //yield put(updateProfileFailure());
  }
}
