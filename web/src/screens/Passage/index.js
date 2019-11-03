import React, { useState, useEffect } from "reactn";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";
import { Trivia } from "./Trivia";

const Wrap = styled.div`
  padding: 35px;
  color: white;
`;

const Hello = styled.p`
  font-size: 16px;
`;

const UsernameColors = styled.span`
  color: #a9ffc1;
`;

const Personalized = styled.span`
  color: #a5d9fe;
`;

const Paragraph = styled.p`
  font-size: 16px;
`;

const BookTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 0;
  line-height: 1;
`;

const BookInfo = styled.h4`
  font-size: 12px;
  color: #afafaf;
  margin-top: 0;
  font-weight: lighter;
`;

const Rating = styled.h3`
  font-size: 16px;
`;

const BookTitleBigger = styled.h1`
  font-size: 30px;
  margin-bottom: 0;
`;

const BookAuthor = styled.div`
  font-size: 14px;
  color: #afafaf;
  margin-top: 0;
`;

const BookInfoBigger = styled.h4`
  font-size: 14px;
  color: #afafaf;
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 0;
`;

const BuyNow = styled.a`
  font-size: 14px;
  color: #fff2af;
  font-weight: normal;
`;

const GroupDown = styled.div`
  margin-top: 15px;
`;

const Intro = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white

    &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const OnePage = styled.div`
  height: 100vh;
`;

const ChevWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;
const Chevron = styled.i`
  border: solid white;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 20px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Thumb = styled.a`
  margin-left: 15px;
  cursor: pointer;
`;

const data = {
  genres: ["IDK"],
  authors: ["Ray Bradbury"],
  published: new Date(),
  location: "United States",
  link: "https://www.amazon.com/Fahrenheit-451-Ray-Bradbury/dp/1451673310",
  source: "Fahrenheit 451",
  reference: "p. 134",
  content:
    'Yellowbanded perch, slender mola flabby whalefish cuchia bobtail snipe eel blue shark jack, armored searobin nurse shark huchen. Sandperch pelican eel, "dragonet scythe butterfish bocaccio grunter Blenny giant gourami boxfish barracudina: hammerhead shark." False cat shark Chinook salmon sailbearer, striped burrfish kokanee spotted dogfish. Northern Stargazer longnose sucker longnose sucker sandperch--lake whitefish drum angler Rainbowfish grunt boxfish bangus hawkfish river loach. Lighthousefish bluntnose knifefish; electric eel round whitefish sucker halfmoon bass whiptail gulper. Sandbar shark Colorado squawfish; algae eater bleak longnose sucker clingfish soapfish Ganges shark." Pikeblenny pumpkinseed tang: Bengal danio bluefin tuna pelagic cod monkfish gray mullet pilchard catfish sand tiger sawfish croaker; boafish.',
  quote:
    "False cat shark Chinook salmon sailbearer, striped burrfish kokanee spotted dogfish.",
  questions: [
    {
      question:
        "Ribbon eel horsefish southern Dolly electric eel jackfish opah sunfish, hawkfish?",
      options: ["Yes", "No"],
      results: [75, 32],
      comments: [{ commenter: "Clay McGinnis", comment: "I hate the sea!" }]
    }
  ],
  likes: 24,
  dislikes: 2
};

const BookDetails = () => {
  return (
    <div>
      <div>
        <a>
          <img />
        </a>
        <BookTitleBigger>Fahrenheit 451</BookTitleBigger>
      </div>
      <BookAuthor>Ray Bradbury</BookAuthor>
      <div>
        <img />
        <div>
          <BookInfoBigger>October 19th, 1953</BookInfoBigger>
          <BookInfoBigger>United States</BookInfoBigger>
          <GroupDown>
            <BookInfoBigger>The Sieve and the Sand, p. 132</BookInfoBigger>
            <BuyNow>Buy on Amazon</BuyNow>
          </GroupDown>
        </div>
      </div>
    </div>
  );
};

const Passage = () => {
  const [rating, setRating] = useState("");
  const [passage, setPassage] = useState(undefined);
  const onUp = () => {
    setRating("up");
  };
  const onDown = () => {
    setRating("down");
  };
  useEffect(() => {
    const doIt = async () => {
      setPassage(
        await fetch("http://127.0.0.1:8000/api/passages/1/").then(resp =>
          resp.json()
        )
      );
    };
    doIt();
  }, []);

  if (!passage) {
    return (
      <Wrap>
        <OnePage>
          <h3>Loading</h3>
        </OnePage>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <OnePage>
        <Intro to="/profile">
          <img />
          <Hello>
            Hey <UsernameColors>Clay</UsernameColors>, this one's for{" "}
            <Personalized>you</Personalized>
          </Hello>
        </Intro>
        <BookTitle>Fahrenheit 451</BookTitle>
        <BookInfo>1953 - Ray Bradbury - United States</BookInfo>
        <Paragraph>
          Yellowbanded perch, slender mola flabby whalefish cuchia bobtail snipe
          eel blue shark jack, armored searobin nurse shark huchen. Sandperch
          pelican eel, "dragonet scythe butterfish bocaccio grunter Blenny giant
          gourami boxfish barracudina: hammerhead shark." False cat shark
          Chinook salmon sailbearer, striped burrfish kokanee spotted dogfish.
          Northern Stargazer longnose sucker longnose sucker sandperch--lake
          whitefish drum angler Rainbowfish grunt boxfish bangus hawkfish river
          loach. Lighthousefish bluntnose knifefish; electric eel round
          whitefish sucker halfmoon bass whiptail gulper. Sandbar shark Colorado
          squawfish; algae eater bleak longnose sucker clingfish soapfish Ganges
          shark." Pikeblenny pumpkinseed tang: Bengal danio bluefin tuna pelagic
          cod monkfish gray mullet pilchard catfish sand tiger sawfish croaker;
          boafish.
        </Paragraph>
        <ChevWrap>
          <Chevron />
        </ChevWrap>
      </OnePage>

      <Rate>
        <Rating>Did you like this passage?</Rating>
        <Thumb onClick={onUp}>
          <MaterialIcon
            icon="thumb_up"
            color={rating === "up" ? "#447744" : "#b3b3b3"}
          />
        </Thumb>
        <Thumb onClick={onDown}>
          <MaterialIcon
            icon="thumb_down"
            color={rating === "down" ? "#774444" : "#b3b3b3"}
          />
        </Thumb>
      </Rate>

      <hr />
      <BookDetails />
      <hr />

      <Trivia question={data.questions[0]} />
    </Wrap>
  );
};

export { Passage };
