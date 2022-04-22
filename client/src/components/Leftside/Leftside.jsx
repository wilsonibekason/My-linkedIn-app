import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Leftside = (props) => {
    const Container = styled.div`
    grid-area: leftside;
    `;
    const Artside = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 300ms;
    position: relative;
    `;

    const Userinfo  = styled.div`
     border-bottom: 1px solid rgba(0,0,0,.15);
     padding: 12px 12px 16px;
     word-wrap: break-word;
     word-break: break-word;
    `;

    const Cardbackground = styled.div`
        background: url('/images/card-bg.svg');
        background-position: center;
        background-size: 462px;
        height: 54px;
        margin: -12px -12px 0;
    `;

    const Photo = styled.div`
    box-shadow: none;
    background-image: url(/images/photo.svg);
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
    `;

    const Link  =  styled.div`
    font-size: 15px;
    line-height: 1.5 ;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 700;
    `;
     
     const Addphototext = styled.div`
     color: rgba(0,0,0,.9);
     margin-top: 4px;
     font-size: 12px;
     line-height: 1.2;
     font-weight: 400;
     
     `;

     const Widget = styled.div`
     border-bottom: 1px solid rgba(0,0,0,.9);
     `;

     const Item = styled.a`
     `;

  return (
    <Container>
       <Artside>
           <Userinfo>
               <Cardbackground />
               <a>
                   <Photo />
                   <Link>Welcome, wilson</Link>
               </a>
               <a><Addphototext>Add a photo</Addphototext></a>
           </Userinfo>
           <Widget>
               <a href="#">
                  <div>
                  <span>Connections</span>
                   <span>Connections</span>
                  </div>
                  <img src="images/widget-icon.svg" alt="" />
               </a>
               <Item>
                   <span>
                       <img src="images/item-icon.svg" alt="" />
                   </span>
               </Item>
           </Widget>
       </Artside>
    </Container>
  )
}

export default Leftside