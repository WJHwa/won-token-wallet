import React, { useCallback, useState } from "react";
import axios from "axios";
import Background from "./Background/Background";
import { Modal, Button } from "react-bootstrap";

function Passwordchange({ data, history }) {
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [show, setShow] = useState(false);

  const handleInputPw = useCallback(
    (e) => {
      setPw(e.target.value);
    },
    [pw]
  );
  const handleInputPw2 = useCallback(
    (e) => {
      setPw2(e.target.value);
    },
    [pw2]
  );

  const handleClose = useCallback(() => {
    setShow(false);
  }, [show]);
  const handleShow = useCallback(() => {
    setShow(true);
  }, [show]);

  const redir = () => {
    history.push("/login");
  };
  const noredir = () => {
    history.push("/");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (pw !== pw2) {
      return alert("비밀번호를 잘못 입력하셨습니다.");
    } else if (pw && pw2 === "") {
      return alert("비밀번호를 입력하세요.");
    } else if (pw.length < 8) {
      return alert("비밀번호가 너무 짧습니다.");
    }

    let body = {
      pw: pw,
      id: data,
    };
    try {
      await axios.put("/passwordfind", body).then((res) => {
        if (res.data !== false) {
          handleShow();
        } else {
          alert("전 비밀번호와 같습니다. 다른 비밀번호로 변경하세요.");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const container = {
    backgroundColor: "#DCDCDC",
    padding: "10px 30px 30px 30px",
    borderRadius: "15px",
    textAlign: "center",
  };
  const label = { height: "35px" };

  const form = {
    padding: "30px 30px 10px",
  };

  const div = { padding: "0 0 10px" };

  const button = { padding: "10px 80px 10px 80px" };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
        }}
      >
        <Background />
        <div className="container" style={container}>
          <h1
            style={{
              textAlign: "center",
              padding: "30px 0 0 0",
            }}
          >
            비밀번호 변경
          </h1>

          <form onSubmit={onSubmit} style={form}>
            <label style={label}>---------- 비밀번호 ----------</label>
            <div className="form-floating" style={div}>
              <input
                type="password"
                className="form-control-sm"
                value={pw}
                placeholder="   비밀번호을 입력하세요."
                onChange={handleInputPw}
                style={{ padding: "0 25px 0 25px" }}
              />
            </div>
            <label style={label}>---------- 비밀번호 확인 ----------</label>
            <div className="form-floating" style={div}>
              <input
                type="password"
                className="form-control-sm"
                value={pw2}
                placeholder="   비밀번호을 입력하세요."
                onChange={handleInputPw2}
                style={{ padding: "0 30px 0 30px" }}
              />
            </div>
            <div style={{ height: "30px" }} />
            <button className="btn btn-secondary" type="submit" style={button}>
              비밀번호 변경
            </button>
          </form>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>비밀번호가 변경되었습니다.</Modal.Title>
            </Modal.Header>
            <Modal.Body>바로 로그인 하시겠습니까?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={noredir}>
                메인으로
              </Button>
              <Button variant="secondary" onClick={redir}>
                로그인
              </Button>
            </Modal.Footer>
          </Modal>
          <div style={{ height: "65px" }}></div>
        </div>
      </div>
    </>
  );
}

export default Passwordchange;
