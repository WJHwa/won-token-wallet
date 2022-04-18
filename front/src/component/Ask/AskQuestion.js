import React from "react";
import Asklist from "./Asklist";
import Background from "../Background/Background";
import Menu from "../Menu/Menu";

function AskQuestion({ history }) {
  return (
    <>
      <Background />
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
        }}
      >
        <Asklist history={history} />
        <Menu />
      </div>
    </>
  );
}

export default AskQuestion;
