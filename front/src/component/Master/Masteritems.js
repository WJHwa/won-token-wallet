import React from "react";
import { Link } from "react-router-dom";

function Masteritems({ data, idx }) {
  return (
    <>
      <tbody
        style={{
          tableLayout: "fixed",
          wordWrap: "break-word",
          fontSize: "13px",
        }}
      >
        {data.map((d) => {
          return (
            <tr key={d.id}>
              <th>{d.id}</th>
              <td>{d.name}</td>
              <td>{d.title}</td>
              <td>{d.content}</td>
              <td>{d.answer}</td>
              <td>
                {d.answer === "답변대기중.." ? (
                  <Link
                    to={`/user/master/${idx}/question/${d.id}`}
                    style={{ textDecoration: "none", padding: "3px" }}
                  >
                    답변하기
                  </Link>
                ) : (
                  "답변완료"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default Masteritems;
