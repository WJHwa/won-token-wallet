import React from "react";
import Background from "../Background/Background";

function Home() {
  return (
    <div>
      <div>
        <Background />

        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/img/bbb.png"})`,
          }}
        >
          <div style={{ height: "432px", color: "white", textAlign: "center" }}>
            <h1>환영합니다.</h1>
            <br />
            <h5>안전하게 지갑을 이용하실수 있습니다.</h5>
            <br />
            <h5>송금,잔액조회,거래내역을 자유롭고 할수있는 사이트</h5>
            <br />
            <h5>첫방문이시면 회원가입후 이용부탁드립니다.</h5>
          </div>
        </div>

        <nav className="nav nav-pills fixed-bottom flex-column flex-sm-row navbar-dark bg-dark">
          <a
            className="flex-sm-fill text-sm-center nav-link active"
            href="/login"
          >
            로그인
          </a>
          <a
            className="flex-sm-fill text-sm-center nav-link active"
            href="/register"
          >
            회원가입
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Home;
