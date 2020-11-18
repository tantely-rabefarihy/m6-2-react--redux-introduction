import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { CartItem } from "./CartItem";
import { getStoreItemArray, getTotal } from "../reducers/index";

export const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const cartTotal = useSelector(getTotal);

  console.log(storeItems);

  return (
    <Wrapper>
      <CartDetails>
        <Title>Your Cart</Title>
        <div>0 Item</div>

        {storeItems.map((item, index) => {
          return (
            <CartItem
              key={index}
              id={item.id}
              price={item.price}
              quantity={item.quantity}
              title={item.title}
            />
          );
        })}
      </CartDetails>
      <Footer>
        <Total>Total: {cartTotal} $ </Total>
        <Purchase>Purchase </Purchase>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0px;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: white;
  min-width: 300px;
  background-color: rgb(64, 31, 67);
  height: 100vh;
`;
const CartDetails = styled.div`
  max-height: calc(100vh - 240px);
  overflow: auto;
  padding-left: 32px;
  padding-right: 32px;
`;
const Total = styled.div`
  position: absolute;
  bottom: 50px;
  left: 32px;
`;

const Title = styled.h2``;

const Footer = styled.div``;
const Purchase = styled.button`
  position: absolute;
  bottom: 50px;
  right: 20px;
  width: 100px;
  border-radius: 12px;
  background: rgb(255, 64, 110);
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
