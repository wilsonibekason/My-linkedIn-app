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
     padding-top: 12px;
     padding-bottom: 12px;

      & > a{
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 12px;

          &:hover{
              background-color: rgba(0,0,0,.05);
          }
          div{
              display: flex;
              flex-direction: column;
              text-align: left;
              span{
                  font-size: 12px;
                  line-height: 1.12;
                  &:first-child{
                      color: rgba(0,0,0,.5);
                  }
                  &:nth-child(2){
                      color: rgba(0,0,0,.5);
                  }
              }
          }
      }
     `;

     const Item = styled.a`
     border-color: rgba(0,0,0,0.6);
     text-align: center;
     padding: 12px;
     font-size: 12px;
     display: block;

     span{
         display: flex;
         align-items: center;
         color: rgba(0,0,0,06);
         svg{
             color: rgba(0,0,0,0.6)
         }
     }

     &:hover{
         background-color: rgba(0,0,0,0.1);
     }
     `;

     const CommunityCard = styled(Artside)`
     padding: 8px 0 0 ;
     text-align: left;
     display: flex;
     flex-direction: column;
     a{
         color: rgba(0,0,0,.9);
         padding: 4px 12px 4px 12px;
         text-decoration: none;
         font-size: 12px;
    

     &:hover{
         color: rgba(0,0,0,.5)
     }

     span{
         display: flex;
         align-items: center;
         justify-content: space-between;
     }
     &:last-child{
         color: rgba(0,0,0,.6);
         border-top: 1px solid #d5cec2;
         padding: 12px;
         :hover{
             background-color: rgba(0,0,0,.6)
         }
       }
     } 
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
               <a>
                  <div>
                  <span>Connections</span>
                   <span>Connections</span>
                  </div>
                  <img src="images/widget-icon.svg" alt="" />
               </a>
               </Widget>
               <Item>
                   <span>
                       <img src="images/item-icon.svg" alt="" />
                       dfjj
                   </span>
               </Item>
       </Artside>
       <CommunityCard>
           <a>
               <span>Groups</span>
           </a>
           <a href="">
               <span>Events
                   <img src="images/plus-icon.svg" alt="" />
               </span>
           </a>
           <a href="">
               <span>
                   follow Hash Tag
               </span>
           </a>
           <a href="">
               <span>
                   Discover More
               </span>
           </a>
       </CommunityCard>
    </Container>
  )
}

export default Leftside