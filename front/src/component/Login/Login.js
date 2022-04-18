import React from "react";

import Background from "../Background/Background";
import Logintb from "./Logintb";

function Login({ history }) {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
      }}
    >
      <Background />
      <Logintb history={history} />
      <div style={{ height: "90px" }}></div>
    </div>
  );
}

export default Login;
