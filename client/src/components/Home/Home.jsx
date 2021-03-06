import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import styled from "styled-components";
import { signOutAPI } from "../../actions";
import Leftside from "../Leftside/Leftside";
import Main from "../Main/Main";
import Rightside from "../Rightside/Rightside";

const Home = (props) => {
  const Container = styled.div`
    padding-top: 80px;
    max-width: 100%;
  `;

  const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
  `;

  const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    justify-content: center;
    h5 {
      color: #0a66c2;
      font-size: 14px;
      a {
        font-weight: 700;
      }
    }
    p {
      font-size: 15px;
      color: #434649;
      font-weight: 600;
    }

    @media screen and (max-width: 760px) {
      flex-direction: column;
      padding: 0 5px;
    }
  `;

  const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 25px 0;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding: 0 5px;
    }
  `;

  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <Section>
        <h5>
          <a>Hiring in a hurry</a>
        </h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          totam.
        </p>
      </Section>
      <Layout>
        <div>
          <Leftside />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <Rightside />
        </div>
      </Layout>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps)(Home);
