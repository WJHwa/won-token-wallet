import React, { useEffect, useState } from "react";
import "bootstrap";
import Menu from "../Menu/Menu";
import axios from "axios";
import Web3 from "web3";
import Background from "../Background/Background";
import SendMmtform from "./SendMmtform";
import data from "../../data.json";

const SendMmt = () => {
  const [sendaccount, setSendaccount] = useState("");
  const [name, setName] = useState("");
  const [ide, setIde] = useState("");
  const [value, setValue] = useState("");

  let web3 = new Web3(new Web3.providers.HttpProvider(data.provider));

  const account1 = async () => {
    const body = localStorage.getItem("Tok");
    try {
      const res = await axios.get("/mmtsend", {
        headers: {
          authorization: "bearer " + body,
        },
      });
      setSendaccount(res.data.Wn);
      setName(res.data.name);
      setIde(res.data.id);
      getBalance(res.data.Wn);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    account1();
  }, []);

  const contract = data.contract;

  const ABI = data.ABI;

  const ba = new web3.eth.Contract(ABI, contract);

  const getBalance = async (address) => {
    try {
      let balace = await ba.methods.balanceOf(address).call();
      setValue(balace.slice(0, 3) + "MMT");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(http://www.coinreaders.com/imgdata/coinreaders_com/202009/2020091714243717.jpg)`,
      }}
    >
      <Background />
      <div
        className="container"
        style={{
          backgroundColor: "#DCDCDC",
          padding: "20px 0 0 0",
          textAlign: "center",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <h3>MMT 보내기</h3>
        <SendMmtform sendaccount={sendaccount} name={name} value={value} />
        <div style={{ height: "15px" }}></div>
      </div>
      <Menu ide={ide} />
    </div>
  );
};

export default SendMmt;
