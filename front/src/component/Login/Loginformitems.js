import React from "react";
import { Link } from "react-router-dom";

function Loginformitems() {
  return (
    <>
      <span style={{ width: "100px" }}>
        <Link to="/passwordfind" style={{ fontSize: "14px" }}>
          비밀번호를 잊어버리셨나요?
        </Link>
      </span>
      <Link
        to="register"
        style={{
          fontSize: "14px",
          textAlign: "center",
          margin: "0 0 0 22px",
        }}
      >
        회원가입
      </Link>
    </>
  );
}

export default Loginformitems;
