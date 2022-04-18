import React from "react";
import WalletTd from "./WalletTd";

function WalletTr({ value, address, valuem }) {
  return (
    <>
      <div
        className="p-2 mb-1 text-white fs-6"
        style={{
          textAlign: "center",
        }}
      >
        주소 : {address}{" "}
      </div>

      <WalletTd value={value} valuem={valuem} />
    </>
  );
}

export default WalletTr;
