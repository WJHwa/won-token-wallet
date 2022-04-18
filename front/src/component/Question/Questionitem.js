import React from "react";
import { Link } from "react-router-dom";

function Questionitem({ list, id }) {
  const style = {
    backgroundColor: "#DCDCDC",
    padding: "10px 30px 30px 30px",
    borderRadius: "15px",
    textAlign: "center",
  };
  return (
    <>
      {list.map((l) => {
        return (
          <li key={l.id} style={style}>
            <Link to={`/user/${id}/question/${l.id}`}>
              <strong>
                {l.id}. 문의:{l.title} {l.name}
              </strong>
            </Link>{" "}
            {l.answericon}
          </li>
        );
      })}
    </>
  );
}

export default Questionitem;
