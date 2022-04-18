import React from "react";
import MasterQnAitems from "./MasterQnAitems";

function MasterQnAlist({ title, name, content, id, history, url }) {
  const container = {
    backgroundColor: "#DCDCDC",
    padding: "10px 30px 30px 30px",
    borderRadius: "15px",
    textAlign: "center",
  };
  return (
    <>
      <h2 style={{ textAlign: "center", color: "white" }}>문의내역</h2>
      <div className="container" style={container}>
        <MasterQnAitems
          title={title}
          name={name}
          content={content}
          id={id}
          history={history}
          url={url}
        />
      </div>
      <div style={{ height: "30px" }}></div>
    </>
  );
}

export default MasterQnAlist;
