import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import { Cart } from "./Cart";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <GlobalStyles />
      <CartWrapper>
        <Cart />
      </CartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* position: relative; */
  display: grid;
  grid-template-areas:
    "header sidebar"
    "main  sidebar";
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
`;

export default App;
