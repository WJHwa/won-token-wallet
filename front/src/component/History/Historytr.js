import React from "react";
import Historytd from "./Historytd";
import { Table } from "react-bootstrap";
import HistoryPage from "./HistoryPage";

function Historytr({ data, loading, perPage, total, Paginate }) {
  const tr = {
    height: "325px",
    textAlign: "center",
    fontSize: "20px",
  };
  const table = {
    tableLayout: "fixed",
    wordWrap: "break-word",
    fontSize: "13px",
  };
  return (
    <>
      <Table striped bordered hover variant="dark" style={table}>
        {data.length > 0 ? (
          <thead>
            <tr>
              <th style={{ width: "6%" }}>#</th>
              <th style={{ width: "30%" }}>받는 계좌</th>
              <th style={{ width: "10%" }}>gas</th>
              <th style={{ width: "40%" }}>transaction Hash </th>
              <th style={{ width: "20%" }}>time</th>
            </tr>
          </thead>
        ) : (
          <thead>
            <tr>
              <th style={{ width: "3%" }}></th>
              <th style={{ width: "3%" }}></th>
              <th style={{ width: "60%" }}></th>
              <th style={{ width: "3%" }}></th>
              <th style={{ width: "3%" }}></th>
            </tr>
          </thead>
        )}
        <tbody
          style={{
            tableLayout: "fixed",
            wordWrap: "break-word",
            fontSize: "13px",
          }}
        >
          {data.length > 0 || loading ? (
            <Historytd data={data} />
          ) : (
            <tr style={tr}>
              <th></th>
              <td></td>
              <td style={{ padding: "120px 0 0 0" }}>
                거래내역을 불러오는중입니다.
              </td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </Table>
      <HistoryPage perPage={perPage} total={total} Paginate={Paginate} />
    </>
  );
}

export default Historytr;
