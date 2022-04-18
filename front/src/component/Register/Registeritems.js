import React, { useState } from "react";
import RegisterModal from "../Modal/RegisterModal";
import axios from "axios";

function Registeritems({ handleClose, handleShow, redir, noredir, show }) {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [email, setEmail] = useState("");
  const [walletnum, setWalletnum] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onChangenick = (e) => {
    setNick(e.target.value);
  };

  const onChangename = (e) => {
    setName(e.target.value);
  };
  const onChange2 = (e) => {
    setValue2(e.target.value);
  };
  const onChangeWn = (e) => {
    setWalletnum(e.target.value);
  };
  const onChangeEamil = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let body = {
      pw: value,
      name: name,
      pw2: value2,
      Wn: walletnum,
      nick: nick,
      email: email,
    };

    if (name === "") {
      return alert("이름을 입력해주세요.");
    } else if (value !== value2) {
      return alert("비밀번호를 다시 확인하세요.");
    } else if (value.length < 8) {
      return alert("비밀번호가 너무 짧습니다.");
    } else if (walletnum === "") {
      return alert("지갑주소를 입력해주세요.");
    } else if (nick === "") {
      return alert("닉네임을 입력해주세요.");
    } else if (email === "") {
      return alert("이메일을 입력해주세요.");
    }
    try {
      const res = await axios.post("/register", body);
      if (res.data !== false) {
        handleShow();
      } else {
        alert("이미 가입하신 이름이 있습니다.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // Style css //
  const label = { height: "25px" };
  const input = { padding: "0 40px 0 10px" };
  const div = { padding: "0 0 20px" };
  const button = { padding: "7px 80px 7px 80px" };
  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{
          padding: "40px 50px 10px",
          textAlign: "center",
        }}
      >
        <label style={label}>------------이메일------------</label>
        <div className="form-floating mb-3 col-xs-4">
          <input
            className="form-control-sm"
            value={email}
            type="email"
            placeholder="  이메일을 입력하세요"
            onChange={onChangeEamil}
            style={input}
          />
        </div>
        <label style={label}>------------이름-------------</label>
        <div className="form-floating mb-3 col-xs-4">
          <input
            className="form-control-sm"
            value={name}
            placeholder="  이름을 입력하세요"
            onChange={onChangename}
            style={input}
          />
        </div>
        <label style={label}>-----------닉네임------------</label>
        <div className="form-floating mb-3 col-xs-4">
          <input
            className="form-control-sm"
            value={nick}
            placeholder="  닉네임을 입력하세요"
            onChange={onChangenick}
            style={input}
          />
        </div>
        <label style={label}>----------비밀번호-----------</label>
        <div className="form-floating" style={div}>
          <input
            type="password"
            class="form-control-sm"
            value={value}
            placeholder="  8자~15자를 입력하세요."
            onChange={onChange}
            style={input}
          />
        </div>
        <label style={label}>--------비밀번호 확인---------</label>
        <div className="form-floating" style={div}>
          <input
            type="password"
            class="form-control-sm"
            value={value2}
            placeholder="  다시 한번 입력해주세요."
            onChange={onChange2}
            style={input}
          />
        </div>
        <label style={label}>----------지갑 주소-----------</label>
        <div className="form-floating" style={div}>
          <input
            type="text"
            class="form-control-sm"
            value={walletnum}
            placeholder="  주소를 입력해주세요."
            onChange={onChangeWn}
            style={input}
          />
        </div>
        <button className="btn btn-secondary" type="submit" style={button}>
          회원가입
        </button>
      </form>
      <RegisterModal
        handleClose={handleClose}
        redir={redir}
        noredir={noredir}
        show={show}
      />
    </>
  );
}

export default Registeritems;
