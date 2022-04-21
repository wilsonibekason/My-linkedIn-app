import React from 'react'
import styled from 'styled-components';

const Header = () => {

  const Container =  styled.div`
  background-color: white;
  border-bottom: 1px solid rgba( 0,0,0,.08);
  left: 0;
  paddsing: 0 24px;
  padding-left: 24px;
  padding-right: 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  `;

  const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100;
  `;

  const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
  `;

  const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
     & > div{
       max-width: 200px;
       input{
         border: none;
         box-shadow: none;
         background-color: #eef3f8;
         border-radius: 2px;
         color: rgba(0,0,0,0.9);
         width: 218px;
         padding: 0 8px 0 40px;
         line-height: 1.75;
         font-weight: 500;
         font-size: 14px;
         height: 34px;
         border-color:#dce6f1;
         vertical-align: text-top;
       }
     }
  `

  const Searchicon = styled.div`
       width: 40px;
       position: absolute;
       top: 10px;
       z-index: 1;
       left: 2px;
       border-radius: 0 2px 2px 0;
       pointer-events: none;
       margin: 0;
       display: flex;
       justify-content: center;
       align-items: center;
       transition: backgroung-color .5ms;
  `;
   
  const Nav = styled.nav`
     maregin-left: auto;
     display: block;
     @media screen and (max-width: 2000px){
      padding-right: 5rem;
     }
     @media screen and (max-width: 768px) {
       position: fixed;
       left: 0;
       bottom: 0;
       background: white;
       width: 100%;
     }
  `;
   const NavListWrap = styled.ul`
     display: flex;
     flex-wrap: nowrap;
     list-style-type: none;

     .active{
       span:after{
         content: '';
         transform: scaleX(1);
         border-bottom: 2px solid #fff;
         bottom: 0;
         left: 0;
         position: absolute;
         border-color: rgba(0,0,0,0.9);
         width: 100%;
       }
     }
   `;

   const  NavList = styled.li`
     display: flex;
     align-items: center;
     a{
       align-items: center;
       background: transparent;
       display: flex;
       flex-direction: column;
       font-size: 12px;
       font-weight: 500;
       justify-content: center;
       line-height: 1.5;
       min-height: 52px;
       min-width: 80px;
       position: relative;
       text-decoration: none;
       span{
         color: rgba(0,0,0,.6);
         display: flex;
         align-items: center;
       }
       @media screen and (max-width: 2000px) {
         padding-right: 0;
       }
       @media screen and (max-width: 768px) {
         min-width: 70px;
       }
     }
     span{
       color: rgba(0,0,0,.6);
       display: flex;
       align-items: center;
     }

     @media screen and (max-width: 768px) {
       min-width: 70px;
     }
     &:hover,
     &:active{
         a{
           span{
             color: rgba(0,0,0,.9);
           }
         }
     }
   `;

   
   const Signout = styled.div`
      position: absolute;
      top: 45px;
      background: white;
      border-radius: 10px;
      width: 100px;
      height: 40px;
      font-size: 16px;
      text-align: center;
      transition-duration: 500ms;
      display: none;

   `;

   const User = styled(NavList)`
    a > svg{
      width: 24px;
      border-radius: 50%;
    }
    a > img{
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    span{
      display: flex;
      align-items: center;
    }

    &:hover{
      ${Signout}{
        align-items: center;
        display: flex;
        justify-content: center;
      }
    }
   `;

   const Work = styled(User)`
         border-left: 1px solid rgba(0,0,0,.08);
   `;


  return (
    <Container>
      <Content>
        <Logo>
          <a href="">
          <img src="../images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder='search'/>
          </div>
          <Searchicon>
            <img src="../images/search-icon.svg" alt="" />
          </Searchicon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className='active'>
              <a href="">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-jobs.svg" alt="" />
                <span> Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Chats</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Nofications</span>
              </a>
            </NavList>
            <NavList>
              <a href="">
                <img src="/images/nav-network.svg" alt="" />
                <span>Network</span>
              </a>
            </NavList>

            <User>
              <a href="">
              <img src="/images/user.svg" alt="" />
            <span>Me</span>
            <img src="/images/down-icon.svg" alt="" />
              </a>
              <Signout>
                <a href="">
                  SignOut
                </a>
              </Signout>
            </User>
            <Work>
              <a href="">
                <img src="/images/nav-work.svg" alt="" />
                <span>work</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  )
}

export default Header