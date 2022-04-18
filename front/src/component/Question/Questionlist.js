import React from "react";

import { Link } from "react-router-dom";
import Questionitem from "./Questionitem";

function Questionlist({ id, list, idx }) {
  const style = {
    padding: "15px",
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    backgroundColor: "#003399",
    borderRadius: "5px",
  };

  const div = {
    padding: "15px 0 0 0",
    margin: "50px 0 60px 0",
    height: "78px",
    backgroundColor: "white",
    borderRadius: "15px",
  };

  const container = {
    backgroundColor: "#DCDCDC",
    padding: "10px 30px 30px 30px",
    borderRadius: "15px",
    textAlign: "center",
  };

  return (
    <>
      <div className="container" style={container}>
        <h3 style={{ margin: "8px 0 20px 0" }}>문의내역</h3>
        {list.length > 1 ? (
          <Questionitem id={id} list={list} key={list.id} />
        ) : (
          <div style={div}>문의내역이 없습니다.</div>
        )}
        <div style={{ height: "20px" }} />
        <Link to={`ask`} style={style}>
          문의하기
        </Link>
      </div>
      <div style={{ height: "168px" }}></div>
    </>
  );
}

export default Questionlist;
