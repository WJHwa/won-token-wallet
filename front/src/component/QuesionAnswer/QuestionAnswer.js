import axios from "axios";
import React, { useEffect, useState } from "react";
import Background from "../Background/Background";
import Menu from "../Menu/Menu";
import QuestionAnlist from "./QuestionAnlist";

function QuestionAnswer({ match, history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [answer, setAnswer] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    start();
  }, []);
  const url = match.url.slice(0, 17);
  const id = match.params.id;
  const start = async () => {
    let token = localStorage.getItem("Tok");

    try {
      const res = await axios.get("/user/:id/question/:id", {
        params: {
          id: id,
        },
        headers: {
          authorization: "bearer " + token,
        },
      });
      setTitle(res.data[0].title);
      setContent(res.data[0].content);
      setAnswer(res.data[0].answer);
      setName(res.data[0].name);
      setTime(res.data[0].q_date);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
        }}
      >
        <Background />
        <QuestionAnlist
          title={title}
          name={name}
          content={content}
          answer={answer}
          time={time}
          url={url}
          history={history}
        />
      </div>
      <Menu />
    </>
  );
}

export default QuestionAnswer;
