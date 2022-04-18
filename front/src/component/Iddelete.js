import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

function Iddelete({ history, pw, pw2, id }) {
  const onClick = async () => {
    const token = localStorage.getItem("Tok");

    if (pw !== pw2 || pw === "" || pw === "") {
      return alert("비밀번호를 정확하게 입력해주세요.");
    }
    try {
      await axios
        .delete("/myinfo/user/" + id, {
          headers: {
            authentization: "Bearer" + token,
          },
        })
        .then((res) => {
          if (res.data) {
            localStorage.removeItem("Tok", res.data.token);
            alert("회원탈퇴 완료되었습니다.");
            history.push("/");
          } else {
            console.log(res.status);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  const button = {
    textDecoration: "none",
    padding: "7px 10px 11px 11px",
    borderRadius: "5px",
    color: "white",
    textAlign: "center",
  };
  return (
    <>
      <Button
        onClick={() => {
          onClick();
        }}
        type="button"
        variant="secondary"
        style={button}
      >
        회원탈퇴
      </Button>
    </>
  );
}

export default Iddelete;
