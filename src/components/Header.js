import React from 'react';
import { styled } from "styled-components";

const Header = () => {
   const HeaderWrap = styled.div`
      display: flex;
      & span {
         display: inline-block;
         padding: 0 10px;
         border-right: solid 1px lightgray;
         line-height: 1;
         font-weight: 500;
         font-size: 14px;
      }
      & span:last-of-type {
         border-right: none;
         color: gray;
      }
   `
   return (
      <HeaderWrap>
         <span>Main</span>
         <span>Clothes</span>
         <span>Basic Tee 6-Pact</span>
      </HeaderWrap>
   );
};

export default Header;