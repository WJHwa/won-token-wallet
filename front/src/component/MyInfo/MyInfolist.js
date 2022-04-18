import axios from "axios";
import React, { useEffect, useState } from "react";

import MyInfolistform from "./MyInfolistform";

import MyInfoPut from "./MyInfoPut";

function MyInfolist({ history }) {
  const [name, setName] = useState("김아무개");
  const [Wn, setWn] = useState("dfsafef2fesfsfsf");
  const [nick, setNick] = useState("닉네임을 설정해주세요.");
  const [email, setEmail] = useState("이메일을 설정해주세요.");
  const [on, setOn] = useState(false);
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [id, setId] = useState("");

  const onpwChange = (e) => {
    setPw(e.target.value);
  };
  const onpwChange2 = (e) => {
    setPw2(e.target.value);
  };
  const onClick = () => {
    setOn(true);
  };

  const style = { fontSize: "17px", listStyle: "none", padding: "0 0 12px 0" };

  useEffect(() => {
    Start();
  }, [on]);

  const Start = async () => {
    let body = localStorage.getItem("Tok");
    await axios
      .get(
        "/myinfo/user/:id",
        {
          headers: {
            authorization: "bearer " + body,
          },
        },
        body
      )
      .then((res) => {
        setName(res.data.name);
        setNick(res.data.nick);
        setEmail(res.data.email);
        setWn(res.data.Wn);
        setId(res.data.id);
      });
  };

  return (
    <>
      {on === false ? (
        <div>
          <h5 style={{ fontSize: "13px", padding: "8px 0 6px 0" }}>
            * 변경시 변경하기 버튼을 눌러주세요.
          </h5>
          <li style={style}>이름: {name}</li>
          <li style={style}>지갑주소: {Wn}</li>
          <li style={style}>닉네임: {nick}</li>
          <li style={style}>이메일: {email}</li>
          <MyInfolistform
            history={history}
            onClick={onClick}
            onpwChange2={onpwChange2}
            onpwChange={onpwChange}
            pw={pw}
            pw2={pw2}
            id={id}
          />
        </div>
      ) : (
        <MyInfoPut
          name={name}
          Wn={Wn}
          nick={nick}
          email={email}
          setOn={setOn}
        />
      )}
    </>
  );
}

export default MyInfolist;
