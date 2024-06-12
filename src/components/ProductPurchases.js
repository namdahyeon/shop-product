import React from 'react';
import { styled } from "styled-components";

const ProductPurchases = () => {
   const Flex = styled.div`
      flex-direction: column;
   `
   const Price = styled.p`
      font-size: 24px;
      font-weight: 500;
   `
   const FlexWrap = styled.div`
      display: flex;
   `
   const StarWrap = styled.div`
      display: flex;
      margin-right: 10px;
      & span {
         width: 20px;
         height: 20px;
      }
      & svg {
         fill: currentColor;
      }
      & span:last-of-type svg {
         fill: none;
      }
   `
   const H3Tit = styled.h3`
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color: #3e3e3e;
      margin-top: 30px;
   `
   const SubTitle = styled.em`
      color: #4942E4;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px;
   `
   const ColorBoxWrap = styled.div`
      display: flex;
      gap: 10px;
      & div:nth-of-type(2) label {
         background-color: lightgray;
      }
      & div:nth-of-type(3) label {
         background-color: #1a1a1a;
      }
   `
   const ColorInput = styled.input`
      display: none;
      &:checked + label {
         border: solid 2px #333;
      }
   `
   const ColorLabel = styled.label`
      width: 40px;
      height: 40px;
      display: block;
      border: solid 2px lightgray;
      border-radius: 50%;
      box-sizing: content-box;
      background-color: #fff;
      text-indent: -999px;
      overflow: hidden;
   `
   const SizeBoxWrap = styled.div`
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
   `
   const SizeBox = styled.div`
      width:calc(25% - 10px);
      height:50px;
   `
   const SizeInput = styled.input`
      display: none;
      
      &:disabled + label {
         position: relative;
         background-color: #eee;
         color: lightgray;

         background-image: linear-gradient(to right bottom, transparent calc(50% - 1px), lightgray, transparent calc(50% + 1px));
         background-size: 120% 120%;
         background-position: center;
      }
      &:checked + label {
         border-color: #4942E4;
      }
   `
   const SizeLabel = styled.label`
      display: block;
      width: 100%;
      height: 100%;
      border: solid 2px lightgray;
      border-radius: 6px;
      text-align: center;
      line-height: 50px;
      font-weight: 600;
   `
   const Button = styled.button`
      width: 100%;
      border-radius: 4px;
      padding: 10px;
      margin-top: 30px;
      border: none;
      background: #4942E4;
      color: #fff;
      font-size:14px;
   `

   return (
      <Flex>
         <Price>$192</Price>
         <FlexWrap>
            <StarWrap>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
               </span>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
               </span>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
               </span>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
               </span>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
               </span>
            </StarWrap>
            <SubTitle>117 reviews</SubTitle>
         </FlexWrap>
         <form /* onSubmit={} */>
            <div>
               <H3Tit>Color</H3Tit>
               <ColorBoxWrap>
                  <div>
                     <ColorInput type="radio" id="white" name="color" value="white"/>
                     <ColorLabel for="white">white</ColorLabel>
                  </div>
                  <div>
                     <ColorInput type="radio" id="gray" name="color" value="gray" />
                     <ColorLabel for="gray">gray</ColorLabel>
                  </div>
                  <div>
                     <ColorInput type="radio" id="black" name="color" value="black" />
                     <ColorLabel for="black">black</ColorLabel>
                  </div>
               </ColorBoxWrap>
            </div>
            <div>
               <H3Tit>Size<SubTitle>Size guids</SubTitle></H3Tit>
               <SizeBoxWrap>
                  <SizeBox>
                     <SizeInput type="radio" id="XXS" name="size" value="XXS" disabled />
                     <SizeLabel for="XXS">XXS</SizeLabel>
                  </SizeBox>
                  <SizeBox>
                     <SizeInput type="radio" id="XS" name="size" value="XS" />
                     <SizeLabel for="XS">XS</SizeLabel>
                  </SizeBox>
                  <SizeBox>
                     <SizeInput type="radio" id="S" name="size" value="S" />
                     <SizeLabel for="S">S</SizeLabel>
                  </SizeBox>
                  <SizeBox>
                     <SizeInput type="radio" id="M" name="size" value="M" />
                     <SizeLabel for="M">M</SizeLabel>
                  </SizeBox>
                  <SizeBox>
                     <SizeInput type="radio" id="L" name="size" value="L" />
                     <SizeLabel for="L">L</SizeLabel>
                  </SizeBox>
                  <SizeBox>
                     <SizeInput type="radio" id="XL" name="size" value="XL" />
                     <SizeLabel for="XL">XL</SizeLabel>
                  </SizeBox>
                  <SizeBox>
                     <SizeInput type="radio" id="XXL" name="size" value="XXL" />
                     <SizeLabel for="XXL">XXL</SizeLabel>
                  </SizeBox>
                  <SizeBox>
                     <SizeInput type="radio" id="XXXL" name="size" value="XXXL"/>
                     <SizeLabel for="XXXL">XXXL</SizeLabel>
                  </SizeBox>
               </SizeBoxWrap>
            </div>
            <Button type="submit">Add to bag</Button>
         </form>
      </Flex>
   );
};

export default ProductPurchases;