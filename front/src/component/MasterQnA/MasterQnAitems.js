import React from "react";
import MasterQnAform from "./MasterQnAform";

function MasterQnAitems({ title, content, name, id, history, url }) {
  const container = {
    color: "white",
    backgroundColor: "#696969",
    padding: "10px 30px 50px 30px",
    borderRadius: "15px",
    textAlign: "left",
    margin: "0 0 18px 0",
  };

  const div = {
    margin: "0 0 20px 0",
    backgroundColor: "#696969",
    borderRadius: "15px",
    padding: "20px",
    color: "white",
  };
  return (
    <>
      <div style={{ fontSize: "13px", textAlign: "right" }}>
        작성자 : {name}
      </div>
      <div style={{ fontSize: "20px", margin: "10px 0 0 0" }}>
        제목 : {title}{" "}
      </div>
      <br />
      <div style={div}>문의내용 : {content}</div>
      <div className="container" style={container}>
        <MasterQnAform id={id} history={history} url={url} />
      </div>
    </>
  );
}

export default MasterQnAitems;
