import React from "react";
import { Button } from "react-bootstrap";
import Iddelete from "../Iddelete";

function MyInfolistform({
  history,
  onClick,
  onpwChange2,
  onpwChange,
  pw,
  pw2,
  id,
}) {
  const style = { fontSize: "17px", listStyle: "none", padding: "0 0 12px 0" };
  const input = { height: "22px", width: "200px" };
  const button = {
    marginRight: "37px",
    padding: "8px",
    backgroundColor: "#003399",
  };
  const div = { padding: "2px 0 3px 0", fontSize: "13px" };
  return (
    <>
      <form>
        <li style={style}>
          비밀번호:{" "}
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            style={input}
            onChange={onpwChange}
          />
        </li>
        <li style={style}>
          비밀번호 확인:{" "}
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            style={input}
            onChange={onpwChange2}
          />
          <div style={div}>* 회원탈퇴시 비밀번호를 입력해주세요.</div>
        </li>
        <Button style={button} onClick={() => onClick()}>
          변경하기
        </Button>
        <Iddelete history={history} pw={pw} pw2={pw2} id={id} />
      </form>
    </>
  );
}

export default MyInfolistform;
