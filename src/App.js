import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ProductInfo from './components/ProductInfo';
import ProductPurchases from './components/ProductPurchases';
import { styled } from "styled-components";

function App() {
  const Body =  styled.div`
    padding: 20px 40px;
  `
  const Flex =  styled.div`
    display: flex;
    gap: 20px;
  `
  return (
    <Body>
      <Header/>
      <Main/>
      <Flex>
        <ProductInfo/>
        <ProductPurchases/>
      </Flex>
    </Body>
  );
}

export default App;
