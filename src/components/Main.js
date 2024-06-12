import React from 'react';
import { styled } from "styled-components";
import Img1 from "./images/shirt1.webp";
import Img2 from "./images/shirt2.webp";
import Img3 from "./images/shirt3.webp";
import Img4 from "./images/shirt4.jpg";

const Main = () => {
   const Flex =  styled.div`
      display: flex;
      padding: 20px 0;
      gap:20px;
   `
   const ImgList =  styled.div`
      display: flex;
      flex-direction: column;
      gap:20px;
      width: 33.333%;
   `
   const ImgWrap =  styled.div`
      height: 340px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: rgba(50, 50, 93, 0.15) 0px 50px 100px -20px, rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
   `
   const RowImgWrap =  styled.div`
      border-radius: 10px;
      width: 100%;
      height: 160px;
      overflow: hidden;
      box-shadow: rgba(50, 50, 93, 0.15) 0px 50px 100px -20px, rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
   `
   const Img =  styled.img`
      width: 100%;
   `
   return (
      <Flex>
         <ImgList>
            <ImgWrap><Img src={Img1} alt="" /></ImgWrap>
         </ImgList>
         <ImgList>
            <RowImgWrap><Img src={Img2} alt="" /></RowImgWrap>
            <RowImgWrap><Img src={Img3} alt="" /></RowImgWrap>
         </ImgList>
         <ImgList>
            <ImgWrap><Img src={Img4} alt="" /></ImgWrap>
         </ImgList>
      </Flex>
   );
};

export default Main;