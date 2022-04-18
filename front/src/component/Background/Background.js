import React from "react";

function Background() {
  const div = {
    backgroundImage: `url(http://www.coinreaders.com/imgdata/coinreaders_com/202009/2020091714243717.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "270px",
    border: "2px ssolid",
    textAlign: "center",
    width: "100%",
  };
  return (
    <>
      <div style={div}></div>
    </>
  );
}

export default Background;
