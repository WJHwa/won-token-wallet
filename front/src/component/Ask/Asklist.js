import React from "react";
import Askform from "./Askform";

function Asklist({ history }) {
  const container = {
    backgroundColor: "#DCDCDC",
    padding: "10px 30px 20px 30px",
    borderRadius: "15px",
    textAlign: "center",
  };
  return (
    <>
      <h3 style={{ textAlign: "center", color: "white" }}>문의하기</h3>
      <div className="container" style={container}>
        <Askform history={history} />
      </div>
      <div style={{ height: "36px" }} />
    </>
  );
}

export default Asklist;
