import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";

function Menutoggle({ id, idx, ids, name, idq, idw, ide }) {
  const link = {
    backgroundColor: "#D3D3D3",
    textDecoration: "none",
    color: "black",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    textAlign: "center",
    margin: "5px 0 7px 0",
  };
  return (
    <>
      <Navbar.Toggle
        aria-controls="offcanvasNavbar"
        style={{ backgroundColor: "#A9A9A9" }}
      />
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">
            BlockChain
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link to="/wallet" style={link}>
              <strong>Wallet</strong>
            </Link>
            <Link to="/myinfo" style={link}>
              <strong>내정보</strong>
            </Link>
            <Link
              to={`/user/${ids || idx || ids || idq || idw || ide}/question`}
              style={link}
            >
              <strong>문의하기</strong>
            </Link>

            {name !== "마스터" ? (
              <Link to="" style={link}>
                <strong>준비중..</strong>
              </Link>
            ) : (
              <Link
                to={`/user/master/${
                  id || idx || ids || idq || idw || ide
                }/question`}
                style={link}
              >
                <strong>문의함</strong>
              </Link>
            )}
            <span style={{ height: "360px" }}></span>
            <Link to="/logout" style={link}>
              Logout
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
}

export default Menutoggle;
