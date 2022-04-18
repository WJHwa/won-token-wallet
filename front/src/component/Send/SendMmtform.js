import React from "react";
import "bootstrap";
import SendMmtformitem from "./SendMmtformitem";

function SendMmtform({ sendaccount, name, value }) {
  const style = {
    backgroundColor: "#DCDCDC",
    padding: "10px 0 0 0",
    textAlign: "center",
  };
  return (
    <>
      <div className="container" style={style}>
        <h5 style={{ padding: "3px" }}>
          <i className="far fa-copyright"></i> 잔액 : {value}
        </h5>
        <SendMmtformitem sendaccount={sendaccount} name={name} />
      </div>
    </>
  );
}

export default SendMmtform;
