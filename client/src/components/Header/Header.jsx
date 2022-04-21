import React from 'react'
import styled from 'styled-components';

const Header = () => {

  const Container =  styled.div`
  background-color: white;
  border-bottom: 1px solid rgba( 0,0,0,.08);
  left: 0;
  padding: 0 24px;
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
     margin-left: auto;
     display: block;
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
   `;

   const  NavList = styled.li`
     
   `

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
            <NavList>
              <a href="">
                <img src="/images/nav-home.svg" alt="" />
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  )
}

export default Header