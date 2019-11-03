import React from "react";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";

// FIXME: Hr currently has a tiny width for some reason
const divider = styled.hr``;

const ProfileScreen = styled.main`
  background: #30323a;
  display: flex;
  flex-direction: column;
  margin: 0 35px 0 35px;
`;

const ProfilePic = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 178px;
  width: 178px;
  overflow: hidden;
  margin: 35px auto auto auto;
`;

const Greeting = styled.span`
  font-size: 36px;
  font-weight: normal;
  text-align: center;
`;

const Name = styled.span`
  color: #a9ffc1;
`;

const PassageCount = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 0 auto 0 auto;
`;

const PassasgeTitle = styled.h1`
  font-size: 30px;
  font-weight: medium;
  margin: 0 0 0 0;
`;

const PassageList = styled.div`
  display: flex;
  flex-direction: column;
`;

// Max-width based on a max line length of 15 characters
const PassageItem = styled.p`
  font-size: 22px;
  max-width: 170px;
`;

const JSON_stuff = [
  {
    title: "Fahrenheit 451",
    desc: "1953 - Ray Bradbury",
    page: "134"
  },
  {
    title: "Slaughterhouse Five",
    desc: "1969 - Kurt Vonnegut",
    page: "77"
  },
  {
    title: "Le Comte de Monte Cristo",
    desc: "1844 - Alexandre Dumas",
    page: "3989"
  },
  {
    title: "So Good They Can’t Ignore You",
    desc: "2012 - Cal Newport",
    page: "89"
  }
];

const Passage = ({ passage }) => {
  return <PassageItem>{passage.title}</PassageItem>;
};

const Profile = ({ username, imgSource, passageCount }) => {
  const passage_list = JSON_stuff.map((element, index) => {
    return (
      <div>
        <Passage passage={element} key="index" />
      </div>
    );
  });

  return (
    <ProfileScreen>
      <ProfilePic>
        <img src={imgSource} alt="Profile picture" />
      </ProfilePic>

      <Greeting>
        Hey <Name>{username}</Name>,
      </Greeting>
      <PassageCount>You've read {passageCount} passages</PassageCount>

      <hr />
      <PassasgeTitle>
        Passages
        <MaterialIcon icon="bookmark_border" />
      </PassasgeTitle>
      <PassageList>{passage_list}</PassageList>
      <hr />
    </ProfileScreen>
  );
};

export { Profile };

