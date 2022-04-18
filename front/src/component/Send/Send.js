import React, { useEffect, useState } from "react";
import "bootstrap";
import Menu from "../Menu/Menu";
import Web3 from "web3";
import axios from "axios";
import Background from "../Background/Background";
import Sendform from "./Sendform";
import data from "../../data.json";

const Send = () => {
  const [sendaccount, setSendaccount] = useState("");
  const [name, setName] = useState("");
  const [idq, setIdq] = useState("");
  const [value, setValue] = useState("");

  let web3 = new Web3(new Web3.providers.HttpProvider(data.provider));

  const account1 = async () => {
    const body = localStorage.getItem("Tok");
    try {
      const res = await axios.get("/send", {
        headers: {
          authorization: "bearer " + body,
        },
      });
      setSendaccount(res.data.Wn);
      setName(res.data.name);
      setIdq(res.data.id);
      getBalance(res.data.Wn);
    } catch (err) {
      console.log(err);
    }
  };

  const getBalance = async (addre) => {
    try {
      await web3.eth.getBalance(addre, (error, wei) => {
        if (!error) {
          var balance = web3.utils.fromWei(wei, "ether");
          setValue(balance + " " + "eth");
        }
      });
    } catch (err) {
      setValue(err);
    }
  };

  useEffect(() => {
    account1();
  }, []);

  const style = {
    backgroundColor: "#DCDCDC",
    padding: "20px 0 0 0",
    textAlign: "center",
    borderRadius: "20px 20px 0 0",
  };
  return (
    <div
      style={{
        backgroundImage: `url(http://www.coinreaders.com/imgdata/coinreaders_com/202009/2020091714243717.jpg)`,
      }}
    >
      <Background />
      <div className="container" style={style}>
        <h3>ETH 보내기</h3>
        <Sendform sendaccount={sendaccount} name={name} value={value} />
      </div>
      <Menu idq={idq} />
    </div>
  );
};

export default Send;
