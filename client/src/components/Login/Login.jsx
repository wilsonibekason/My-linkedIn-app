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
`

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
   </Container>
  )
}


export default Login