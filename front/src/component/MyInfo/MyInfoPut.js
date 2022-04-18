import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function MyInfoPut({ Wn, nick, name, email, setOn }) {
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [name1, setName] = useState(name);
  const [Wn1, setWn] = useState(Wn);
  const [nick1, setNick] = useState(nick);
  const [email1, setEmail] = useState(email);

  const onnickchange = (e) => {
    setNick(e.target.value);
  };
  const onemailchange = (e) => {
    setEmail(e.target.value);
  };
  const onwnchange = (e) => {
    setWn(e.target.value);
  };
  const onnamechange = (e) => {
    setName(e.target.value);
  };
  const onpwchange = (e) => {
    setPw(e.target.value);
  };
  const onpwchange2 = (e) => {
    setPw2(e.target.value);
  };
  const onClick = () => {
    setOn(false);
  };

  const Submit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("Tok");

    let body = {
      name: name1,
      Wn: Wn1,
      nick: nick1,
      email: email1,
      pw: pw,
      token: token,
    };

    if (pw !== pw2) {
      return alert("비밀번호가 같지않습니다.");
    }

    try {
      await axios.put("/myinfo/user/:id", body).then((res) => {
        if (res.data !== true) {
          alert("비밀번호를 정확하게 입력해주세요.");
        } else {
          alert("변경되었습니다.");
          setOn(false);
          setName(name1);
          setNick(nick1);
          setEmail(email1);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const li = {
    fontSize: "17px",
    listStyle: "none",
    padding: "0 0 12px 0",
    marginRight: "14px",
  };
  const li2 = {
    fontSize: "17px",
    listStyle: "none",
    padding: "0 0 12px 0",
  };

  const input = { height: "22px", width: "200px" };

  return (
    <div>
      <form onSubmit={Submit}>
        <li
          style={{
            fontSize: "17px",
            listStyle: "none",
            padding: "32px 0 12px 0",
            marginLeft: "15px",
          }}
        >
          이름:{" "}
          <input
            type="text"
            value={name1}
            placeholder="닉네임를 입력해주세요."
            style={input}
            onChange={onnamechange}
          ></input>
        </li>

        <li style={li}>
          지갑주소:{" "}
          <input
            type="text"
            value={Wn1}
            placeholder="닉네임를 입력해주세요."
            style={input}
            onChange={onwnchange}
          ></input>
        </li>
        <li style={li2}>
          닉네임:{" "}
          <input
            type="text"
            value={nick1}
            placeholder="닉네임를 입력해주세요."
            style={input}
            onChange={onnickchange}
          ></input>
        </li>
        <li style={li2}>
          이메일:{" "}
          <input
            type="email"
            value={email1}
            placeholder="이메일를 입력해주세요."
            style={input}
            onChange={onemailchange}
          ></input>
        </li>
        <li style={li}>
          비밀번호:{" "}
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            style={input}
            onChange={onpwchange}
          />
        </li>
        <li
          style={{
            fontSize: "17px",
            listStyle: "none",
            padding: "0 0 46px 0",
            marginRight: "47px",
          }}
        >
          비밀번호 확인:{" "}
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            style={input}
            onChange={onpwchange2}
          />
        </li>
        <Button
          type="submit"
          style={{
            marginRight: "37px",
            padding: "8px",
            backgroundColor: "#003399",
          }}
        >
          변경하기
        </Button>
        <Button
          style={{
            marginRight: "13px",
            padding: "8px",
            backgroundColor: "#696969",
          }}
          onClick={onClick}
        >
          취소하기
        </Button>
      </form>
    </div>
  );
}

export default MyInfoPut;
