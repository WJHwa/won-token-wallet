import React from "react";
import { Table } from "react-bootstrap";
import Masteritems from "./Masteritems";

function Mastertable({ data, idx }) {
  return (
    <>
      <h4 style={{ color: "white", textAlign: "center" }}>
        <i> 문의함 </i>
      </h4>
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{
          tableLayout: "fixed",
          wordWrap: "break-word",
          fontSize: "13px",
        }}
      >
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "8%" }}>이름</th>
            <th style={{ width: "25%" }}>제목</th>
            <th style={{ width: "35%" }}>내용 </th>
            <th style={{ width: "10%" }}>답변</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <Masteritems data={data} idx={idx} />
      </Table>
    </>
  );
}

export default Mastertable;
