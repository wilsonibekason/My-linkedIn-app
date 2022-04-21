import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
padding: 0
`;

const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: no-wrap;
 
& > a {
    width: 135px;
    height: 34px;
    @media (max-width: 770px){
        padding: 0 5px
    } 
}
`;

const Join = styled.a`
  font-size: 16px;
  padding: 16px 12px;
  text-decoration: none;
  color: rgba( 0, 0, 0, .6);
  border-radius: 4px;
  margin-right: 12px;

  &:hover{
      background-color: rgba( 0, 0, 0, .06);
      color: rgba( 0, 0, 0, .8);
      text-decoration: none;
  }
`;

const Signin = styled.a`
    box-shadow: inset  0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 170ms;
    font-size: 16px;
    font-weight: 700;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    &:hover{
        background-color: rgba(112, 101, 230, .15);
        color: #0a66c2;
        text-decoration: none;
    }
`;

const Section = styled.section`
    display: flex;
    align-content: flex-start;
    min-height: 700px;
    padding-bottom: 130px;
    padding-top: 40px;
    position: relative;
    flex-wrap: wrap;
    padding: 60px 10px;
    width: 100%;
    max-width: 1128px;
    margin: auto;
    @media screen and (max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`;

const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 500;
        line-height: 78px;
        @media screen and (max-width: 768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }
    img{
        // z-index: 1;
        width: 700px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media screen and (max-width: 768px){
            top: 58px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;

const Form = styled.div`
     margin-top: 100px;
     width: 408px;
     @media screen and (max-width: 768px) {
         margin-top: 20px;
     }
`;

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 58px;
    width: 100%;
    border-radius: 50px;
    box-shadow: inset 0 0 0 1px rgba( 0 0 0 / 60%), inset  0 0 0 1px rgba( 0 0 0 / 20%);
    vertical-align: middle;
    z-index: 0;
    font-size: 20px;
    color: rgba( 0 0 0 .8);
    &:hover{
        background-color: rgba( 0 0 0 .25);
        color: rgba( 0 0 0 .8);
    }
`;

const Login = () => {
  return (
   <Container>
       <Nav>
           <a href="">
               <img src="../../images/Login-logo.svg" alt="" />
           </a>
           <div>
               <Join>Join now</Join>
               <Signin>Signin</Signin>
           </div>
       </Nav>
       <Section>
            <Hero>
                <h1>Welcome to your professional community</h1>
                <img src="../images/login-hero.svg" alt="" />
            </Hero>
            <Form>
                <Google>
                    <img src="../images/google.svg" alt="" />
                    Signin with google
                </Google>
            </Form>
       </Section>
   </Container>
  )
}


export default Login