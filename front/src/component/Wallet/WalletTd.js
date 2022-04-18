import React from "react";

function WalletTd({ value, valuem }) {
  const style = {
    textAlign: "center",
    height: "240px",
    backgroundColor: "#DCDCDC",
    fontSize: "23px",
    padding: "50px",
    borderRadius: "20px",
  };
  return (
    <div className="container" style={style}>
      <i className="fab fa-ethereum"></i> 잔액 : {value}
      <div
        style={{
          margin: "15px 0 0 0",
          borderRadius: "4px",
          padding: "7px",
        }}
      >
        <i className="far fa-copyright"></i> 잔액 : {valuem}
      </div>
    </div>
  );
}

export default WalletTd;
