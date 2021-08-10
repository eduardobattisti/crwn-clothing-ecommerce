import React from "react";
import CustomButtom from "../custom-button/custom-button.component";

import "./cart-dropdow.style.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

export default CartDropdown;
