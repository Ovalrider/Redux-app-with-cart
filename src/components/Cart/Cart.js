import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux"

const Cart = (props) => {
  const items = useSelector(state => state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.length > 0 && items.map((value)=>{
          return <CartItem
          item={{id: value.id, title: value.title, quantity: value.quantity, total: value.totalPrice, price: value.price}} key={value.id}
        />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
