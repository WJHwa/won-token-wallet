import axios from "axios";
import React, { useEffect } from "react";

function Logout({ history }) {
  useEffect(() => {
    out();
  }, []);

  const out = async () => {
    let token = localStorage.getItem("Tok");
    try {
      const res = await axios.get("/logout", {
        headers: {
          authorization: "bearer " + token,
        },
      });
      localStorage.removeItem("Tok");
      alert(res.data);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return <div></div>;
}

export default Logout;
