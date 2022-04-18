import React from "react";
import Registeritems from "./Registeritems";

function Registerform({ handleClose, handleShow, redir, noredir, show }) {
  const div = {
    backgroundColor: "#DCDCDC",
    padding: "0 30px 30px 30px",
    borderRadius: "15px",
  };
  return (
    <>
      <div className="container" style={div}>
        <h2 style={{ textAlign: "center", padding: "30px 0 0 0" }}>회원가입</h2>
        <Registeritems
          handleClose={handleClose}
          handleShow={handleShow}
          redir={redir}
          noredir={noredir}
          show={show}
        />
      </div>
    </>
  );
}

export default Registerform;
