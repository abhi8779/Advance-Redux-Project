import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartItemsActions } from "../../store/cartItemsSlice";

const CartItem = (props) => {
  const dispatchFn = useDispatch();
  const { title, quantity, total, price } = props.item;
  const item = { title: title, price: price };

  const decreaseItemHandler = () => {
    dispatchFn(cartItemsActions.decreaseItem(item));
  };
  const increaseItemHandler = () => {
    dispatchFn(cartItemsActions.increaseItem(item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemHandler}>-</button>
          <button onClick={increaseItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
