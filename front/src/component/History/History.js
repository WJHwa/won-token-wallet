import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Background from "../Background/Background";
import Historytr from "./Historytr";
import Menu from "../Menu/Menu";
import axios from "axios";

function History() {
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [perPage] = useState(5);
  const [idw, setIdw] = useState("");
  const [data, setData] = useState([
    {
      id: "",
      to: "",
      gas: "",
      hash: "",
      name: "",
    },
  ]);

  let web3;
  if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
  } else {
    // Set the provider you want from Web3.providers
    web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://ropsten.infura.io/v3/0af72e83abdd47cf9de32cf0909d4304"
      )
    );
  }

  useEffect(() => {
    Inquire();
  }, []);
  const Inquire = async () => {
    let token = localStorage.getItem("Tok");
    setLoading(true);
    try {
      const res = await axios.get("/history", {
        headers: {
          authorization: "bearer " + token,
        },
      });
      setData(res.data.result);
      setIdw(res.data.id);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const indexOfLastP = current * perPage;
  const indexOfFirstP = indexOfLastP - perPage;
  const currentPosts = data.slice(indexOfFirstP, indexOfLastP);

  const Paginate = (p) => setCurrent(p);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
        }}
      >
        <Background />
        <h2 style={{ color: "White", textAlign: "center" }}>거래내역</h2>
        <Historytr
          data={currentPosts}
          loading={loading}
          perPage={perPage}
          total={data.length}
          Paginate={Paginate}
        />
        <Menu idw={idw} />
      </div>
    </>
  );
}

export default History;
