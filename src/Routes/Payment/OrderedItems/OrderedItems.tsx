import { itemType } from "../../../db";
import OrderedItem from "./OrderedItem/OrderedItem";
import "./OrderedItems.scss";

interface OrderedItemsProps {
  cartItems: itemType[];
  removeOrderedItem: (id: string) => void;
}
function OrderedItems({ cartItems, removeOrderedItem }: OrderedItemsProps) {
  if (cartItems.length === 0) {
    return <div className='orderedItems-empty'>No product in cart</div>;
  }

  return (
    <div className='orderedItems'>
      {cartItems.map((cartItem) => {
        return (
          <OrderedItem
            key={cartItem.id}
            cartItem={cartItem}
            removeOrderedItem={removeOrderedItem}
          />
        );
      })}
    </div>
  );
}

export default OrderedItems;
