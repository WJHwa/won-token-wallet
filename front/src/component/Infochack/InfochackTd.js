import React, { useState } from "react";
import axios from "axios";

function InfochackTd({ history }) {
  const [pw, setPw] = useState("");

  const handleInputPw = (e) => {
    setPw(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("Tok");

    let body = {
      pw: pw,
      token: token,
    };

    if (pw === "") {
      return alert("비밀번호를 입력하세요.");
    }

    try {
      await axios.post("/myinfo", body).then((res) => {
        if (res.data) {
          history.push(`/myinfo/user/${res.data}`);
        } else {
          alert("비밀번호를 틀렸습니다.");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const button = { padding: "10px 80px 10px 80px" };
  const input = { padding: "0 25px 0 25px" };
  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{
          padding: "30px 30px 10px",
        }}
      >
        <label style={{ height: "35px" }}>--------- Password ---------</label>
        <div className="form-floating" style={{ padding: "0 0 10px" }}>
          <input
            type="password"
            className="form-control-sm"
            value={pw}
            placeholder="   비밀번호를 입력하세요."
            onChange={handleInputPw}
            style={input}
          />
        </div>
        <label style={{ height: "60px" }} />
        <button className="btn btn-secondary" type="submit" style={button}>
          입력하기
        </button>
      </form>
    </>
  );
}

export default InfochackTd;
