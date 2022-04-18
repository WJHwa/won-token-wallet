import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function MasterQnAform({ id, history, url }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let body = {
      value: value,
      id: id,
    };
    try {
      const res = await axios.put("/user/master/:id/quesion/:id", body);
      if (res.data.serverStatus === 2) {
        alert("답변이 등록됬습니다.");
        history.push(`${url}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const button = { margin: "0 0 0 161px", padding: "15px 20px 15px 20px" };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>답변 :</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={value}
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="dark" type="submit" style={button}>
          답변하기
        </Button>
      </Form>
    </>
  );
}

export default MasterQnAform;
