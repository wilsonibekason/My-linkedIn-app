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
  `;

  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your Feed </h2>
          <img src="images/feed-icon.svg" alt="" />
        </Title>
      </FollowCard>
    </Container>
  );
};

export default Rightside;
