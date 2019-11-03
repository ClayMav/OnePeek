import React, { setGlobal, useState } from "reactn";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  margin-top: 0;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Login = () => {
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);

  const onClick = () => {
    console.log(`login ${input}`);
    setTimeout(() => setDone(true), 1000);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  if (done) return <Redirect to="/passage" />;
  return (
    <Wrap>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button onClick={onClick}>Login</button>
      </form>
    </Wrap>
  );
};

export { Login };
