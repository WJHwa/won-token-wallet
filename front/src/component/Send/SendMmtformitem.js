import React, { useState } from "react";
import Web3 from "web3";
import axios from "axios";
import data from "../../data.json";
let Tx = require("ethereumjs-tx").Transaction;

function SendMmtformitem({ sendaccount, name }) {
  const [value, setValue] = useState("");
  const [address, setAddress] = useState("");

  const onChangeInput = (e) => {
    setAddress(e.target.value);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  let web3 = new Web3(new Web3.providers.HttpProvider(data.provider));

  const privateKey = Buffer.from(data.privatekey, "hex");

  const contract = data.contract;

  const ABI = data.ABI;

  const Sendcontract = async () => {
    const contracts = new web3.eth.Contract(ABI, contract);
    const data = contracts.methods
      .transfer(address, web3.utils.toHex(web3.utils.toWei(value.toString())))
      .encodeABI();

    try {
      await web3.eth.getTransactionCount(sendaccount, (err, txCount) => {
        var rawTransaction = {
          from: sendaccount,
          nonce: web3.utils.toHex(txCount),
          gasPrice: web3.utils.toHex(web3.utils.toWei("10", "Gwei")),
          gasLimit: web3.utils.toHex(50000),
          to: contract,
          data: data,
        };

        let tx = new Tx(rawTransaction, { chain: "ropsten" });
        tx.sign(privateKey);
        let serializedeTx = tx.serialize();
        let raw = "0x" + serializedeTx.toString("hex");

        web3.eth
          .sendSignedTransaction(raw)
          .once("transactionHash", (hash) => {
            alert("입금 완료됬습니다.");
          })
          .once("receipt", async (receipt) => {
            console.log("receipt", receipt);
            const body = {
              hash: receipt.transactionHash,
              gas: receipt.gasUsed,
              to: receipt.to,
              name: name,
            };

            const res = await axios.post("/mmtsend", body);
            console.log(res);
          })
          .on("error", console.error);
        setValue("");
        setAddress("");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const formstyle = { padding: "20px 50px 50px 50px" };
  return (
    <>
      <form style={formstyle}>
        <div className="row" style={{ margin: "10px" }}>
          지갑 주소{" "}
          <input
            value={address}
            id="toaddress"
            placeholder="받는 지갑주소"
            onChange={onChangeInput}
          ></input>
          보내실 금액{" "}
          <input
            value={value}
            id="price"
            placeholder="보낼 금액 MMT"
            onChange={onChange}
          ></input>
          <label style={{ padding: "20px 0 20px 0" }}>
            * 지갑 주소와 보낼 금액을 한번 더 확인해주세요.
          </label>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={() => {
              Sendcontract();
            }}
          >
            송금하기
          </button>
        </div>
      </form>
    </>
  );
}

export default SendMmtformitem;
