import CustomIcon from "../../../../Components/CustomIcon/CustomIcon";
import { itemType } from "../../../../db";
import OrderCounter from "./OrderCounter/OrderCounter";
import "./OrderedItem.scss";

interface OrderedItemProps {
  cartItem: itemType;
  removeOrderedItem: (id: string) => void;
}

function OrderedItem({ cartItem, removeOrderedItem }: OrderedItemProps) {
  return (
    <div className='orderedItem'>
      <img className='orderedItem-img' src={cartItem.img} />
      <div className='orderedItem-content'>
        <div className='orderedItem-content-top'>
          <div className='orderedItem-content-top-name'>{cartItem.name}</div>
          <div className='orderedItem-content-top-material'>Carbon fiber</div>
          <div
            className='orderedItem-content-top-close'
            onClick={() => removeOrderedItem(cartItem.id)}
          >
            <CustomIcon name='close' size={18} />
          </div>
        </div>
        <div className='orderedItem-content-bottom'>
          <OrderCounter />
          <div className='orderedItem-content-bottom-price'>
            {cartItem.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderedItem;
