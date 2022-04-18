import React from "react";
import "bootstrap";
import Sendformitem from "./Sendformitem";

function Sendform({ sendaccount, name, value }) {
  const style = {
    backgroundColor: "#DCDCDC",
    padding: "10px 0 0 0",
    textAlign: "center",
  };
  return (
    <>
      <div className="container" style={style}>
        <h5 style={{ padding: "3px" }}>
          <i className="fab fa-ethereum"></i> 이더 : {value}
        </h5>
        <Sendformitem sendaccount={sendaccount} name={name} />
      </div>
    </>
  );
}

export default Sendform;
