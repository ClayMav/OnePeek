import React from "react";
import styled from "styled-components";
import MaterialIcon from "material-icons-react";

const Divider = styled.hr`
  width: 100%;
`;

const ProfileScreen = styled.main`
  background: #30323a;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 35px 0 35px;
  min-height: 100vh;
`;

const ProfilePic = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 178px;
  width: 178px;
  overflow: hidden;
  margin: 35px auto 20px auto;
`;

const Greeting = styled.span`
  font-size: 36px;
  font-weight: normal;
  text-align: center;
  margin: 10px 0 0 0;
`;

const Name = styled.span`
  color: #a9ffc1;
`;

const PassageCount = styled.span`
  font-size: 16px;
  text-align: center;
  margin: 0 auto 15px auto;
`;

const PassageNum = styled.span`
  color: #7ec9ff;
`;

const PassageTitle = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  margin: 10px 0 15px 0;
  padding: 0;
  text-decoration: none;

  p {
    margin: 0;
  }
`;

const Show = styled.span`
  color: #aeaeae;
  font-size: 14px;
  margin: 0 0 0 35px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  min-width: 50px;
`;

const PassageList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 25px 0;
`;

const RightSide = styled.div`
  color: #9d9d9d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  margin: 0 0 0 15px;
  min-width: 115px;
`;

// Max-width based on a max line length of 15 characters
const PassageItem = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 40px;
  margin: 0;
  width: 100%;
`;

const BookTitle = styled.p`
  color: #aaafc5;
  font-size: 22px;
  max-width: 170px;
  margin: 0;
`;

const BookDesc = styled.p`
  color: #aeaeae;
  font-size: 14px;
  margin: 0 0 12px 0;
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
  return (
    <PassageItem>
      <div>
        <BookTitle>
          {passage.title}
        </BookTitle>
        <BookDesc>
          {passage.desc}
        </BookDesc>
      </div>
      <RightSide>
        <p>p.{passage.page}</p>
        <MaterialIcon icon="bookmark_border" color="#afafaf" size={22} />
        <MaterialIcon icon="share" color="#afafaf" size={22} />
      </RightSide>
    </PassageItem>
  );
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

      <Greeting>Hey <Name>{username}</Name>,</Greeting>
      <PassageCount>
        You've read <PassageNum>{passageCount}</PassageNum> passages
      </PassageCount>

      <Divider />
      <PassageTitle>
        <p>Passages</p>
        <Show>
          Show
          <MaterialIcon icon="bookmarks" color="#a7a7a7" size={20} />
        </Show>
      </PassageTitle>
      <PassageList>{passage_list}</PassageList>      
    </ProfileScreen>
  );
};

export { Profile };
