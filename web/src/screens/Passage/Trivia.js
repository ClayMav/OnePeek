import React, { useState } from "reactn";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const TriviaWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Question = styled.p`
  font-size: 18px;
  width: 270px;
  text-align: center;
`;
const DoubleButton = styled.div`
  width: 205px;
  height: 40px;
  display: flex;
`;
const Button = styled.button`
  height: 100%;
  flex: 1;
  outline: none;
  border: none;
  background: #b3b3b3;
  cursor: pointer;
  font-size: 16px;
  transition: 0.1s ease-in-out all;

  &:hover {
    background: #838383;
  }
`;
const Left = styled(Button)`
  border-radius: 20px 0 0 20px;
`;
const Right = styled(Button)`
  border-radius: 0 20px 20px 0;
`;
const Line = styled.span`
  width: 1px;
  height: 70%;
  background: #000;
`;
const Scores = styled.div`
  width: 230px;
  margin-bottom: 30px;
`;
const Comments = styled.div`
  width: 230px;
`;

const MProgress = styled(Progress)`
  color: white;
`;

const Results = {};

const Trivia = ({ question }) => {
  const [clicked, setClicked] = useState("");
  const [comment, setComment] = useState("");

  const onLeft = () => {
    if (clicked === "left") setClicked("");
    else setClicked("left");
  };
  const onRight = () => {
    if (clicked === "right") setClicked("");
    else setClicked("right");
  };

  const onSubmit = e => {
    e.preventDefault();
  };
  const onChange = e => {
    setComment(e.target.value);
  };
  const onClick = () => {
    console.log("sending comment");
  };

  return (
    <TriviaWrap>
      <MaterialIcon icon="assessment" color="#BDBDBD" size={34} />
      <Question>{question.question}</Question>
      <DoubleButton>
        <Left
          style={{ background: clicked === "left" ? "#838383" : "#b3b3b3" }}
          onClick={onLeft}
        >
          {question.options[0]}
        </Left>
        <Line />
        <Right
          style={{ background: clicked === "right" ? "#838383" : "#b3b3b3" }}
          onClick={onRight}
        >
          {question.options[1]}
        </Right>
      </DoubleButton>
      {clicked !== "" ? (
        <div>
          <Scores>
            <h4>{question.options[0]}</h4>
            <MProgress strokeWidth={10} percent={question.results[0]} />{" "}
            <h4>{question.options[1]}</h4>
            <Progress strokeWidth={10} percent={question.results[1]} />
          </Scores>
          <Comments>
            <h3>Comments</h3>
            <hr />
            <form onSubmit={onSubmit}>
              <input value={comment} onChange={onChange} />
              <button onClick={onClick}>Comment</button>
            </form>
            <hr />
            {question.comments.map(comment => {
              return (
                <div>
                  <strong>{comment.commenter}</strong>
                  <p>{comment.comment}</p>
                </div>
              );
            })}
          </Comments>
        </div>
      ) : (
        undefined
      )}
    </TriviaWrap>
  );
};

export { Trivia };
