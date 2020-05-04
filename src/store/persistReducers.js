import storage from "redux-persist/lib/storage";
import { persistReducer, createTransform } from "redux-persist";
import { CryptoJS } from "crypto-js/aes";

const secret = "mY_s3cr3T_KeY-ult@Pow3R";

const encrypt = createTransform(
  inboundState => {
    if (inboundState) return inboundState;
    const cryptedText = CryptoJS.AES.encrypt(
      JSON.stringify(inboundState),
      secret
    );

    return cryptedText.toString();
  },
  outboundState => {
    if (outboundState) return outboundState;
    const bytes = CryptoJS.AES.decrypt(outboundState, secret);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decrypted);
  }
);

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: "PROapp",
      storage,
      whitelist: ["user"],
      transforms: [encrypt]
    },
    reducers
  );

  return persistedReducer;
};
