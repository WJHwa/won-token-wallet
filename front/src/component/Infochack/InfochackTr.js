import React from "react";
import InfochackTd from "./InfochackTd";

function InfochackTr({ history }) {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          padding: "30px 0 0 0",
        }}
      >
        내정보
      </h1>

      <label style={{ fontSize: "13px" }}>
        * 정보를 보시려면 비밀번호를 입력해주세요.
      </label>

      <InfochackTd history={history} />
    </>
  );
}

export default InfochackTr;
