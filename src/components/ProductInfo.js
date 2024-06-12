import React from 'react';
import { styled } from "styled-components";

const ProductInfo = () => {
   const Wrap = styled.div`
      width: 70%;
      padding-right: 20px;
      border-right: solid 1px #ddd;
   `
   const H2Tit = styled.h2`
      font-size: 24px;
      color: #1a1a1a;
   `
   const H3Tit = styled.h3`
      font-size: 18px;
      color: #3e3e3e;
      margin-top: 30px;
   `
   return (
      <Wrap>
         <div>
            <H2Tit>Basic Tee 6-Pact</H2Tit>
            <p>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
         </div>
         <div>
            <H3Tit>Title</H3Tit>
            <ul>
               <li>list</li>
               <li>list</li>
               <li>list</li>
               <li>list</li>
            </ul>
         </div>
         <div>
            <H3Tit>Title</H3Tit>
            <p>Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
         </div>
      </Wrap>
   );
};

export default ProductInfo;