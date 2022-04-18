import React from "react";

function Historytd({ data }) {
  return (
    <>
      {data.map((v) => {
        return (
          <tr key={v.id}>
            <th key={v.id}>{v.id}</th>
            <td>{v.Hash_to}</td>
            <td>{v.gas}</td>
            <td>{v.Hash}</td>
            <td>{v.receipt_date}</td>
          </tr>
        );
      })}
    </>
  );
}

export default Historytd;
