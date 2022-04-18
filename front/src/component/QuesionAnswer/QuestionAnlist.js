import React from "react";
import QuestionAnitems from "./QuestionAnitems";

function QuestionAnlist({ title, name, content, answer, time, url }) {
  const container = {
    backgroundColor: "#DCDCDC",
    padding: "10px 30px 30px 30px",
    borderRadius: "15px",
    textAlign: "center",
  };
  return (
    <>
      <div className="container" style={container}>
        <QuestionAnitems
          title={title}
          name={name}
          content={content}
          answer={answer}
          time={time}
          url={url}
        />
      </div>
      <div style={{ height: "106px" }}></div>
    </>
  );
}

export default QuestionAnlist;
