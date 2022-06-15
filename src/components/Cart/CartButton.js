import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";

import { toggleCartActions } from "../../store/toggleCartSlice";

const CartButton = (props) => {
  const dispatchFn = useDispatch();

  const productCount = useSelector((state) => state.cartItems.totalQuantity);

  const ToggleCartHandler = () => {
    dispatchFn(toggleCartActions.toggleCart());
  };

  return (
    <button onClick={ToggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{productCount}</span>
    </button>
  );
};

export default CartButton;
