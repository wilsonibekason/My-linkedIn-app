import React, { useState } from "react";
import styled from "styled-components";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const reset = (e) => {
    setEditorText(" ");
    props.handleClick(e);
  };
  const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    color: black;
    animation: fadeIn 300;
    background-color: rgba(0, 0, 0, 0.9);
  `;

  const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
  `;

  const Header = styled.div`
    display: block;
    padding: 16px 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.9);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      height: 40px;
      width: 40px;
      min-width: auto;
      svg,
      img {
        pointer-events: none;
      }
    }
  `;

  const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    padding: 8px 12px;
  `;

  const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg,
    img {
      width: 40px;
      height: 40px;
      background-clip: content-box;
      border: 2px solid rgba(0, 0, 0, 0.6);
      border-radius: 50%;
    }
    span {
      font-weight: 700;
      margin-left: 6px;
      font-size: 12px;
      line-height: 1.5;
    }
  `;

  const SharedCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 12px 12px 12px;
  `;

  const AssetBtn = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
  `;

  const Attachasset = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;
    ${AssetBtn} {
      width: 40px;
    }
  `;

  const SharedComment = styled.div`
    margin-right: auto;
    padding-left: 8px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
  `;

  const PostButton = styled.button`
    color: palevioletred;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 10px;
    background-color: ${(props) => (props.disabled ? "black" : "tomato")};
    color: ${(props) => (props.disabled ? "white" : "white")};
    &:hover {
      color: tomato;
      border: 2px solid tomato;
    }
  `;

  const Editor = styled.div`
    padding: 12px 24px;
    textarea {
      width: 100%;
      min-height: 100px;
      resize: vertical;
    }
    input {
      width: 100%;
      height: 45px;
      font-size: 25px;
      margin-bottom: 5px;
    }
  `;

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(e) => reset(e)}>
                <img src="/images/plus-icon.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="images/user.svg" alt="" />
                <span>User</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  //cols="30"
                  //rows="10"
                  placeholder="what do you want to post"
                  autoFocus={true}
                ></textarea>
              </Editor>
            </SharedContent>
            <SharedCreation>
              <Attachasset>
                <AssetBtn>
                  <img src="images/plus-icon.svg" alt="" />
                </AssetBtn>
                <AssetBtn>
                  <img src="images/plus-icon.svg" alt="" />
                </AssetBtn>
              </Attachasset>

              <SharedComment>
                <AssetBtn>
                  <img src="" alt="" />
                  Add bro
                </AssetBtn>
              </SharedComment>
              <PostButton disabled={!editorText ? true : false}>
                Post
              </PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

export default PostModal;
