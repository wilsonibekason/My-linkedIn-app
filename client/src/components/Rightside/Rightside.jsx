import React from "react";
import styled from "styled-components";

const Rightside = (props) => {
  const Container = styled.div`
    grid-area: Rightside;
  `;

  const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: white;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px;
    padding: 12px;
  `;

  const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
  `;

  const FeedList = styled.ul`
    margin-top: 15px;
    li {
      display: flex;
      align-items: center;
      margin: 12px;
      position: relative;
      font-size: 15px;
    }
    div {
      display: flex;
      flex-direction: column;
    }
    Button {
      background: ${(props) => (props.primary ? "palevioletred" : "white")};
      color: ${(props) => (props.primary ? "white" : "palevioletred")};
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    }
  `;

  const Avarter = styled.li`
    background-image: url("https://static.expo.dev/static/brand/square-512x512.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    margin-right: 0px;
  `;

  const Recog = styled.a`
    color: #0a66c2;
    display: flex;
    align-items: center;
    font-size: 14px;
  `;

  const Banner = styled(FollowCard)`
    img {
      width: 100%;
      height: 100%;
    }
  `;

  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your Feed </h2>
          <img src="images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avarter />
            </a>
            <div>
              <span>LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a href="">
              <Avarter />
            </a>
            <div>
              <span>LinkedIn</span>
              <button primary>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recog>
          View all Recognition
          <img src="img/right-icon.svg" alt="" />
        </Recog>
      </FollowCard>
      <Banner>
        <img
          src="https://images.businessnewsdaily.com/app/uploads/2022/04/04082458/1554240992.jpeg"
          alt=""
        />
      </Banner>
    </Container>
  );
};

export default Rightside;
