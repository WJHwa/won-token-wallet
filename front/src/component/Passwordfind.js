import axios from "axios";
import React, { useState, useCallback } from "react";
import Background from "./Background/Background";
import Passwordchange from "./Passwordchange";

function Passwordfind({ history }) {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [rool, setRool] = useState(false);

  const handleInputNm = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    let body = {
      name: name,
    };
    try {
      await axios.post("/passwordfind", body).then((res) => {
        if (res.data !== false) {
          setData(res.data);
          setRool(true);
        } else {
          alert("가입하신 이름이 없습니다.");
          setName("");
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

  const form = {
    padding: "30px 30px 10px",
  };

  const button = { padding: "10px 80px 10px 80px" };

  const div = { height: "114px" };

  return (
    <>
      {rool === false ? (
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
              비밀번호 찾기
            </h1>

            <label style={{ fontSize: "13px" }}>
              * 가입하실때 이름을 적어주세요.
            </label>

            <form onSubmit={onSubmit} style={form}>
              <label style={{ height: "35px" }}>
                ---------- Name ----------
              </label>
              <div className="form-floating" style={{ padding: "0 0 10px" }}>
                <input
                  type="text"
                  className="form-control-sm"
                  value={name}
                  placeholder="     이름을 입력하세요."
                  onChange={handleInputNm}
                  style={{ padding: "0 25px 0 25px" }}
                />
              </div>
              <label style={{ height: "60px" }} />
              <button
                className="btn btn-secondary"
                type="submit"
                style={button}
              >
                비밀번호 찾기
              </button>
            </form>
          </div>
          <div style={div}></div>
        </div>
      ) : (
        <Passwordchange data={data} history={history} />
      )}
    </>
  );
}
export default Passwordfind;
