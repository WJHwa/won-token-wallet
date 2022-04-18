import React from "react";
import InfochackTr from "./InfochackTr";

function InfochackTb({ history }) {
  const container = {
    backgroundColor: "#DCDCDC",
    padding: "10px 30px 30px 30px",
    borderRadius: "15px",
    textAlign: "center",
  };
  return (
    <>
      <div className="container" style={container}>
        <InfochackTr history={history} />
      </div>
    </>
  );
}

export default InfochackTb;
