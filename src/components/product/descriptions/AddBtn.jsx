import React from "react";
import CartIcon from "../../icons/CartIcon";

const AddBtn = ({ text = "Add to cart", icon = true, onClick = null }) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-start justify-center gap-2 rounded-lg bg-orange-personal py-4 text-white shadow-lg hover:bg-orange-400 active:bg-orange-personal"
    >
      {icon && <CartIcon fill="#fff" />}
      <span>{text}</span>
    </button>
  );
};

export default AddBtn;
