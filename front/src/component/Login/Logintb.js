import React from "react";

import Loginform from "./Loginform";

function Logintb({ history }) {
  const container = {
    backgroundColor: "#DCDCDC",
    padding: "10px 30px 30px 30px",
    borderRadius: "15px",
    textAlign: "center",
  };
  return (
    <>
      <div className="container" style={container}>
        <h1
          style={{
            textAlign: "center",
            padding: "30px 0 0 0",
          }}
        >
          로그인
        </h1>

        <Loginform history={history} />
      </div>
    </>
  );
}

export default Logintb;
