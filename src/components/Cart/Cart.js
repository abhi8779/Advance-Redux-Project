import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.title}
              item={{
                title: cartItem.title,
                quantity: cartItem.quantity,
                total: cartItem.total,
                price: cartItem.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
