import React, { setGlobal, useState } from "reactn";
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
  height: 100%;
  width: 100%;
`;

const Login = () => {
  const [input, setInput] = useState("");

  const onClick = () => {
    console.log(`login ${input}`);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Wrap>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={onClick}>Login</button>
      </form>
    </Wrap>
  );
};

export { Login };
