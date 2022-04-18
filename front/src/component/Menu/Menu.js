import React from "react";
import Menuitem from "./Menuitem";
import { Container, Navbar } from "react-bootstrap";

function Menu({ id, idx, ids, name, idq, idw, ide }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand={false}
        style={{
          height: "50px",
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
        }}
      >
        <Container fluid>
          <Menuitem
            id={id}
            idx={idx}
            ids={ids}
            name={name}
            idq={idq}
            idw={idw}
            ide={ide}
          />
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
