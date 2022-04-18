import React, { useEffect, useState } from "react";
import "bootstrap";
import Menu from "../Menu/Menu";
import axios from "axios";
import Web3 from "web3";
import data from "../../data.json";
import Background from "../Background/Background";
import WalletTr from "./WalletTr";

function Wallet({ history }) {
  const [address, setAddress] = useState("");
  const [ids, setIds] = useState("");
  const [value, setValue] = useState("");
  const [valuem, setValuem] = useState("");
  const [name, setName] = useState("");

  // let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  let web3 = new Web3(new Web3.providers.HttpProvider(data.provider));

  // 메인넷일때
  // let web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'));

  const getAddress = async () => {
    let body = localStorage.getItem("Tok");

    try {
      const res = await axios.get("/wallet", {
        headers: {
          authorization: "bearer " + body,
        },
      });
      setAddress(res.data.Wn);
      setIds(res.data.id);
      setName(res.data.name);
      getBalance(res.data.Wn);
      get(res.data.Wn);
    } catch (err) {
      if (err.message === "Request failed with status code 403") {
        alert("오래도록 로그인이 되어있어서 다시 로그인 하세요");
      } else if (err.message === "Request failed with status code 400") {
        alert("권한이 없습니다. 로그인 후 이용하시기 바랍니다.");
        history.push("/login");
      } else {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  const getBalance = async (addre) => {
    try {
      await web3.eth.getBalance(addre, (error, wei) => {
        if (!error) {
          var balance = web3.utils.fromWei(wei, "ether");
          setValue(balance.slice(0, 10) + "...eth");
        }
      });
    } catch (err) {
      setValue(err);
    }
  };

  const contract = data.contract;

  const ABI = data.ABI;

  const ba = new web3.eth.Contract(ABI, contract);

  const get = async (address) => {
    try {
      let balace = await ba.methods.balanceOf(address).call();
      setValuem(balace.slice(0, 3) + "MMT");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Background />

      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
        }}
      >
        <WalletTr value={value} address={address} valuem={valuem} />
        <div style={{ height: "145px" }}></div>
      </div>

      <Menu ids={ids} name={name} />
    </>
  );
}

export default Wallet;
