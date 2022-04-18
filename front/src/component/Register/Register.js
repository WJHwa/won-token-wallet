import React, { useCallback, useState } from "react";
import Registerform from "./Registerform";

function Register({ history }) {
  const [show, setShow] = useState(false);

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

  const div = {
    backgroundImage: `url(http://www.coinreaders.com/imgdata/coinreaders_com/202009/2020091714243717.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "270px",
    border: "2px ssolid",
    width: "100%",
  };
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
      }}
    >
      <div style={div} />
      <Registerform
        handleClose={handleClose}
        handleShow={handleShow}
        redir={redir}
        noredir={noredir}
        show={show}
      />
      <div style={{ height: "50px" }}></div>
    </div>
  );
}

export default Register;
