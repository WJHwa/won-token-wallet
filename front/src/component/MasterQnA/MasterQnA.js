import React, { useEffect, useState } from "react";
import axios from "axios";
import Background from "../Background/Background";
import MasterQnAlist from "./MasterQnAlist";
import Menu from "../Menu/Menu";

function MasterQnA({ match, history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");

  const id = match.params.id;
  const url = match.url.slice(0, 24);

  const start = async () => {
    let token = localStorage.getItem("Tok");

    try {
      const res = await axios.get("/user/master/:id/question/:id", {
        params: {
          id: id,
        },
        headers: {
          authorization: "bearer " + token,
        },
      });
      setTitle(res.data[0].title);
      setContent(res.data[0].content);
      setName(res.data[0].name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <>
      <Background />
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
        }}
      >
        <MasterQnAlist
          title={title}
          name={name}
          content={content}
          id={id}
          history={history}
          url={url}
        />
      </div>
      <Menu />
    </>
  );
}

export default MasterQnA;
