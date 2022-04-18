import axios from "axios";
import React, { useEffect, useState } from "react";
import Background from "../Background/Background";
import Mastertable from "./Mastertable";
import Menu from "../Menu/Menu";

function Master({ match }) {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      title: "",
      content: "",
      answer: "",
    },
  ]);

  const idx = match.params.id;

  useEffect(() => {
    render();
  }, []);
  const render = async () => {
    let body = localStorage.getItem("Tok");

    try {
      let res = await axios.get("/user/master/:id/question", {
        headers: {
          authorization: "bearer " + body,
        },
      });
      setData(res.data);
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
        <Mastertable data={data} idx={idx} />
      </div>
      <Menu />
    </>
  );
}

export default Master;
