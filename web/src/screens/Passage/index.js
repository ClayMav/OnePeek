import React from "reactn";
import styled from "styled-components";
import { Trivia } from "./Trivia";

const Wrap = styled.div`
  padding: 35px;
  color: white;
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
      comments: [{ commenter: "Clay McGinnis", comment: "I hate the sea!" }],
      positive: 75,
      negative: 32
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
        <h1>Fahrenheit 451</h1>
      </div>
      <div>Ray Bradbury</div>
      <div>
        <img />
        <div>
          <h4>October 19th, 1953</h4>
          <h4>United States</h4>
          <h4>The Sieve and the Sand, p. 132</h4>
          <h4>
            <a>Buy on Amazon</a>
          </h4>
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
        <p>
          Hey <span>Clay</span>, this one's for <span>you</span>
        </p>
      </div>
      <h1>Fahrenheit 451</h1>
      <h4>1953 - Ray Bradbury - United States</h4>
      <p>
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
      </p>

      <div>
        <h3>Did you like this passage?</h3>
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
