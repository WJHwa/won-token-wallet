import React, { useState } from "react";
import Web3 from "web3";
import axios from "axios";
import data from "../../data.json";
let Tx = require("ethereumjs-tx").Transaction;

function Sendformitem({ sendaccount, name }) {
  const [value, setValue] = useState("");
  const [address, setAddress] = useState("");

  // let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

  let web3 = new Web3(new Web3.providers.HttpProvider(data.provider));

  let to_account = address; //받는 계좌

  const onChangeInput = (e) => {
    setAddress(e.target.value);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const privateKey = Buffer.from(data.privatekey, "hex");

  const transaction = async (e) => {
    await web3.eth.getTransactionCount(sendaccount, (err, txCount) => {
      const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: to_account, // 받을사람주소
        value: web3.utils.toHex(web3.utils.toWei(value.toString(), "ether")), // 이더값
        gasPrice: web3.utils.toHex(web3.utils.toWei("3", "Gwei")), // 가스 가격
        gasLimit: web3.utils.toHex(21000), // 가스 최대 사용량
        // EIP 155 chainId - mainnet: 1, ropsten: 3
        chainId: 3, //네트워크 ID(3=Ropsten Tesetnet)
      };

      let tx = new Tx(txObject, { chain: "ropsten", hardfork: "istanbul" });
      tx.sign(privateKey);
      //객체를 담은 후 제일 중요한 개인키를 이용한 sign이 들어갑니다.
      //이더리움 테스트넷과 메인넷에는 필수로 sign객체를 만들어야하죠.

      const serializedeTx = tx.serialize();
      const raw = "0x" + serializedeTx.toString("hex");

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

          const res = await axios.post("/send", body);
          console.log(res);
        })
        .on("error", console.error);
      setValue("");
      setAddress("");
    });
  };
  const formstyle = { padding: "20px 50px 50px 50px" };

  return (
    <>
      <form style={formstyle}>
        <div className="row" style={{ margin: "15px" }}>
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
            placeholder="보낼 금액 ETH"
            onChange={onChange}
          ></input>
          <label style={{ padding: "20px 0 20px 0" }}>
            * 지갑 주소와 보낼 금액을 한번 더 확인해주세요.
          </label>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={() => {
              transaction();
            }}
          >
            송금하기
          </button>
        </div>
      </form>
    </>
  );
}

export default Sendformitem;
