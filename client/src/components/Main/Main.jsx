import React from "react";
import styled from "styled-components";

const Main = (props) => {
  const Container = styled.div`
    grid-area: Main;
  `;

  const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 5/6);
  `;

  const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: grey;
    margin: 0 0 8px;
    background: white;

    div {
      button {
        outline: none;
        color: rgba(0, 0, 0, 0.4);
        min-height: 48px;
        line-height: 1.5;
        font-size: 14px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 700;
      }
      &:first-child {
        display: flex;
        align-items: center;
        padding: 0 16px 0 16px;

        img {
          width: 40px;
          margin-right: 8px;
          border-radius: 50%;
        }
        button {
          margin: 6px 0;
          flex-grow: 1;
          border-radius: 35px;
          padding-left: 16px;
          border: 1px solid blue;
          background: rgba(253, 243, 243, 0.835);
        }
      }
      &:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom: 6px;
        button {
          img {
            margin: 0 4px 0 4px;
          }
          span {
            color: #70b5f9;
          }
        }
      }
    }
  `;

  const Article = styled(CommonCard)`
    padding: 0;
    overflow: visible;
    margin: 0 0 8px;
  `;

  const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a {
      margin-right: 12px;
      flex-grow: 1;
      overflow: hidden;
      display: flex;
      text-decoration: none;
      img {
        width: 48px;
        height: 48px;
      }
      & > div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin-left: 8px;
        overflow: hidden;
        span {
          text-align: left;
          &:first-child {
            font-size: 14px;
            font-weight: 700;
          }
          &:nth-child(n + 1) {
            font-size: 12px;
            color: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }
    button {
      position: absolute;
      background: transparent;
      right: 12px;
      top: 0;
      border: none;
      outline: none;
    }
  `;

  const Description = styled.div``;

  const SharedImage = styled.div``;

  return (
    <Container>
      <ShareBox>
        rkifr
        <div>
          <img src="images/user.svg" alt="" />
          <button>Start A Post </button>
        </div>
        <div>
          <button>
            <img src="images/photo.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="images/photo.svg" alt="" />
            <span>video</span>
          </button>
          <button>
            <img src="images/photo.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="images/photo.svg" alt="" />
            <span>write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Title</span>
                <span>Title</span>
              </div>
            </a>
            <button>
              {/* ellipses button */}
              <img src="images/plus-icon.svg" alt="" />
            </button>
          </SharedActor>
          <Description>description</Description>
          <SharedImage>
            <a>
              <img src="images/user.svg" alt="" />
            </a>
          </SharedImage>
        </Article>
      </div>
    </Container>
  );
};

export default Main;
