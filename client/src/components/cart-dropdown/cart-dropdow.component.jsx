import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButtom from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdow.style.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButtom
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButtom>
    </div>
  );
};

export default CartDropdown;
