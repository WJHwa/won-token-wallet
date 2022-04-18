import React from "react";
import { Link } from "react-router-dom";

function QuestionAnitems({ title, name, content, answer, time, url }) {
  const li = {
    margin: "0 0 30px 0",
    listStyle: "none",
    backgroundColor: "#696969",
    borderRadius: "15px",
    padding: "10px",
    color: "white",
  };
  const container = {
    color: "white",
    backgroundColor: "#696969",
    padding: "10px 30px 60px 30px",
    borderRadius: "15px",
    textAlign: "left",
    margin: "0 0 25px 0",
  };
  const link = {
    padding: "13px",
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    backgroundColor: "#003399",
    borderRadius: "5px",
  };
  const div = {
    fontSize: "13px",
    textAlign: "right",
    padding: "0 0 2px 0",
  };
  return (
    <>
      <i style={{ fontSize: "25px" }}>
        <strong>문의내용</strong>
      </i>
      <div style={div}>작성자 : {name}</div>
      <div style={{ fontSize: "13px", textAlign: "right" }}>
        작성한 시간 :{time}
      </div>
      <div style={{ fontSize: "20px", margin: "10px 0 0 0" }}>
        제목 : {title}{" "}
      </div>
      <br />
      <li style={li}>문의내용 : {content}</li>
      <div className="container" style={container}>
        <strong>답변 : {answer}</strong>
      </div>
      <Link to={url} style={link}>
        뒤로가기
      </Link>
    </>
  );
}

export default QuestionAnitems;
