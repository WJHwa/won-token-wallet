import React from "react";
import Background from "../Background/Background";
import Menu from "../Menu/Menu";
import MyInfolist from "./MyInfolist";

function MyInfos({ history, match }) {
  const id = match.params.id;

  const container = {
    backgroundColor: "#DCDCDC",
    borderRadius: "15px",
    textAlign: "center",
    height: "340px",
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
        }}
      >
        <Background />

        <h4 style={{ color: "white", textAlign: "center" }}>내정보 관리</h4>
        <div className="container" style={container}>
          <MyInfolist history={history} />
        </div>
        <div style={{ height: "50px" }}></div>
      </div>
      <Menu id={id} />
    </>
  );
}

export default MyInfos;
