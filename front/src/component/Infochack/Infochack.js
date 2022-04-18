import React from "react";
import Background from "../Background/Background";
import InfochackTb from "./InfochackTb";

function Infochack({ history }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
        }}
      >
        <Background />
        <InfochackTb history={history} />
        <div style={{ height: "140px" }}></div>
      </div>
    </>
  );
}

export default Infochack;
