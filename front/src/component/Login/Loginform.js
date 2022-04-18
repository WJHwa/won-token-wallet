import React, { useState } from "react";
import axios from "axios";
import Loginformitems from "./Loginformitems";

function Loginform({ history }) {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleInputPw = (e) => {
    setPassword(e.target.value);
  };
  const handleInputNm = (e) => {
    setName(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onSubmit = async (e) => {
    e.preventDefault();

    let body = {
      pw: password,
      name: name,
    };
    try {
      await axios.post("/login", body).then((res) => {
        if (res.data) {
          localStorage.setItem("Tok", res.data.accessToken);
          history.push("/wallet");
        } else {
          alert("존재하지 않은 아이디나 비밀번호가 틀렸습니다.");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const button = { padding: "10px 90px 10px 90px" };
  const input = { padding: "0 25px 0 25px" };
  const form = {
    padding: "30px 30px 10px",
  };
  return (
    <>
      <form onSubmit={onSubmit} style={form}>
        <label style={{ height: "35px" }}>---------- Name ----------</label>
        <div className="form-floating" style={{ padding: "0 0 10px" }}>
          <input
            type="text"
            className="form-control-sm"
            value={name}
            placeholder="     이름을 입력하세요."
            onChange={handleInputNm}
            style={input}
          />
        </div>
        <label style={{ height: "35px" }}>-------- Password --------</label>
        <div className="form-floating" style={{ padding: "0 0 20px" }}>
          <input
            type="password"
            className="form-control-sm"
            value={password}
            placeholder="   비밀번호를 입력하세요."
            onChange={handleInputPw}
            style={input}
          />
        </div>
        <button className="btn btn-secondary" type="submit" style={button}>
          Login
        </button>
      </form>
      <Loginformitems />
    </>
  );
}

export default Loginform;
