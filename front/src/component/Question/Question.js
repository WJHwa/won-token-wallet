import axios from "axios";
import React, { useEffect, useState } from "react";
import Background from "../Background/Background";
import Menu from "../Menu/Menu";
import Questionlist from "./Questionlist";

function Question({ match }) {
  const [id, setId] = useState("");
  const [list, setList] = useState([
    {
      id: "",
      title: "",
      content: "",
      answer: "",
    },
  ]);

  const idx = match.params.id;

  useEffect(() => {
    storage();
  }, []);

  const storage = async () => {
    let token = localStorage.getItem("Tok");
    try {
      await axios
        .get("/user/:id/question", {
          headers: {
            authorization: "bearer " + token,
          },
        })
        .then(async (res) => {
          setList(res.data.data);
          setId(res.data.id);
        });
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
        <Questionlist id={id} list={list} idx={idx} />
      </div>
      <Menu idx={idx} />
    </>
  );
}

export default Question;
