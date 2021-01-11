import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CartItem } from "./CartItem";
import { getStoreItemArray, getTotal } from "../reducers/index";
import { clearCart } from "../actions";

export const Cart = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const storeItems = useSelector(getStoreItemArray);
  const cartTotal = useSelector(getTotal);
  const numOfItems = storeItems.length;

  useEffect(() => {
    numOfItems > 0 ? setDisabled(false) : setDisabled(true);
  }, [numOfItems]);

  return (
    <Wrapper>
      <CartDetails>
        <Title>Your Cart</Title>
        <Clear
          disabled={disabled}
          type="button"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Clear>
        <div>{numOfItems} Item(s)</div>

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
        <Purchase onClick={() => alert("THANK YOU FOR YOUR PURCHASE 🥳 !")}>
          Purchase{" "}
        </Purchase>
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
  max-height: calc(100vh - 100px);
  overflow: auto;
  padding-left: 32px;
  padding-right: 32px;
`;

const Total = styled.div`
  position: absolute;
  bottom: 40px;
  left: 32px;
`;

const Title = styled.h2``;

const Footer = styled.div``;

const Purchase = styled.button`
  position: absolute;
  bottom: 40px;
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

const Clear = styled.button`
  position: absolute;
  top: 40px;
  right: 20px;
  width: 80px;
  border-radius: 10px;
  background-color: rgb(255, 64, 110);
  color: white;
  border: none;
  padding: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    background-color: grey;
  }
`;
