import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Askform({ history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const Submit = async (e) => {
    e.preventDefault();

    let token = localStorage.getItem("Tok");
    let body = {
      title: title,
      content: content,
      token: token,
    };

    try {
      const res = await axios.post("/user/:id/ask", body);
      if (res.data) {
        alert("문의가 접수되었습니다.");
        history.push(`/user/${res.data}/question`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const link = {
    padding: "10px 15px 12px 15px",
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    backgroundColor: "#696969",
    borderRadius: "5px",
  };
  const button = { margin: "0 30px 0 0", padding: "8px 11px 7px 11px" };
  return (
    <>
      <Form onSubmit={Submit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="제목을 적어주세요."
            value={title}
            onChange={titleChange}
          />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>문의내용</Form.Label>
          <Form.Control
            placeholder="내용을 적어주세요."
            as="textarea"
            style={{ height: "114px" }}
            value={content}
            onChange={contentChange}
          />
        </Form.Group>
        <Button type="submit" style={button}>
          저장하기
        </Button>
        <Link to="/user/:id/quesion" style={link}>
          취소하기
        </Link>
      </Form>
    </>
  );
}

export default Askform;
