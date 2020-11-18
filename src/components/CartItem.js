import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { close } from "react-icons-kit/fa/close";
import { removeItem } from "../../src/actions";
import { useDispatch } from "react-redux";

export const CartItem = ({ id, price, quantity, title }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Item>{title}</Item>
      <Quantity>
        Quantity : <Input type="text" value={quantity} onChange={quantity} />
      </Quantity>
      <Icon
        icon={close}
        className="icon"
        onClick={() => {
          dispatch(removeItem({ id, title, price }));
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px dashed grey;
  width: 85%;
  position: relative;
  padding-left: 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  .icon {
    position: absolute;
    top: 0;
    right: 5px;
  }
`;

const Item = styled.h4`
  padding-left: 10px;
`;

const Input = styled.input`
  width: 30px;
  font-size: 16px;
  color: white;
  background: transparent;
  border: none;
  border-bottom: solid 2px white;
`;

const Quantity = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  font-size: 17px;
  color: rgb(204, 204, 204);
  width: auto;
  padding: 10px;
`;
