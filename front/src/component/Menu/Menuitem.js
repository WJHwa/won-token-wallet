import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Nav } from "react-bootstrap";
import Menutoggle from "./Menutoggle";

function Menuitem({ id, idx, ids, name, idq, idw, ide }) {
  return (
    <>
      <Link
        to="/wallet"
        style={{
          textDecoration: "none",
          color: "white",
          padding: "8px 70px 8px 70px",
          backgroundColor: "#657383",
        }}
      >
        지갑
      </Link>

      <DropdownButton
        variant="secondary"
        drop="up"
        title=" 보내기"
        style={{
          textDecoration: "none",
          color: "none",
          backgroundColor: "#657383",
          padding: "1px 61px 1px 61px",
        }}
      >
        <Nav.Link
          as={Link}
          to="/send"
          style={{
            textDecoration: "none",
            color: "black",
            padding: "6px 45px 6px 45px",
          }}
        >
          ETH 보내기
        </Nav.Link>

        <Nav.Link
          as={Link}
          to="/mmtsend"
          style={{
            textDecoration: "none",
            color: "black",
            padding: "6px 45px 6px 45px",
            margin: "10px 0 0 0",
          }}
        >
          MMT 보내기
        </Nav.Link>
      </DropdownButton>
      <Link
        to="/history"
        style={{
          textDecoration: "none",
          color: "white",
          padding: "8px 70px 8px 70px",
          backgroundColor: "#657383",
        }}
      >
        거래내역
      </Link>
      <Menutoggle
        id={id}
        idx={idx}
        ids={ids}
        name={name}
        idq={idq}
        idw={idw}
        ide={ide}
      />
    </>
  );
}

export default Menuitem;
