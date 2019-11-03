import React from "reactn";
import styled from "styled-components";
import { Trivia } from "./Trivia";

const Wrap = styled.div`
  padding: 35px;
  color: white;
`;

const Hello = styled.p`
  font-size: 14px;
`;

const UsernameColors = styled.span`
  color: #A9FFC1;
`;

const Personalized = styled.span`
  color: #A5D9FE;
`;

const Paragraph = styled.p`
  font-size: 16px;
`;

const BookTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 0;
`;

const BookInfo = styled.h4`
  font-size: 12px;
  color: #AFAFAF;
  margin-top: 0;
`;

const Rating = styled.h3
`
  font-size: 18px;
`;

const BookTitleBigger = styled.h1
`
font-size: 30px;
margin-bottom: 0;
`;

const BookAuthor = styled.div
`
font-size: 14px;
color: #AFAFAF;
margin-top: 0;
`;

const BookInfoBigger = styled.h4`
  font-size: 14px;
  color: #AFAFAF;
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 0;
`;

const BuyNow = styled.a`
  font-size: 14px;
  color: #FFF2AF;
  font-weight: normal;

`;

const GroupDown = styled.div`
  margin-top: 15px;

`;


const passage = {
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
  return (
    <Wrap>
      <div>
        <img />
        <Hello>
          Hey <UsernameColors>Clay</UsernameColors>, this one's for <Personalized>you</Personalized>
        </Hello>
      </div>
      <BookTitle>Fahrenheit 451</BookTitle>
      <BookInfo>1953 - Ray Bradbury - United States</BookInfo>
      <Paragraph>
        Yellowbanded perch, slender mola flabby whalefish cuchia bobtail snipe
        eel blue shark jack, armored searobin nurse shark huchen. Sandperch
        pelican eel, "dragonet scythe butterfish bocaccio grunter Blenny giant
        gourami boxfish barracudina: hammerhead shark." False cat shark Chinook
        salmon sailbearer, striped burrfish kokanee spotted dogfish. Northern
        Stargazer longnose sucker longnose sucker sandperch--lake whitefish drum
        angler Rainbowfish grunt boxfish bangus hawkfish river loach.
        Lighthousefish bluntnose knifefish; electric eel round whitefish sucker
        halfmoon bass whiptail gulper. Sandbar shark Colorado squawfish; algae
        eater bleak longnose sucker clingfish soapfish Ganges shark." Pikeblenny
        pumpkinseed tang: Bengal danio bluefin tuna pelagic cod monkfish gray
        mullet pilchard catfish sand tiger sawfish croaker; boafish.
      </Paragraph>

      <div>
        <Rating>Did you like this passage?</Rating>
        <a>
          <img />

        </a>
        <a>
          <img />
        </a>
      </div>

      <hr />
      <BookDetails />
      <hr />

      <Trivia question={passage.questions[0]} />

    </Wrap>
  );
};

export { Passage };
