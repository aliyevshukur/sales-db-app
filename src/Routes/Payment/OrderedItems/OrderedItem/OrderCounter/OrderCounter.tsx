import { useState } from "react";
import "./OderCounter.scss";

function CounterBtn({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <div className='orderCounter-btn' onClick={onClick}>
      {title}
    </div>
  );
}

function OrderCounter() {
  const [orderCount, setOrderCount] = useState<number>(0);

  function increaseCount() {
    setOrderCount(orderCount + 1);
  }

  function decreaseCount() {
    setOrderCount(orderCount - 1);
  }

  return (
    <div className='orderCounter'>
      <CounterBtn title='+' onClick={increaseCount} />
      <div className='orderCounter-count'>{orderCount}</div>
      <CounterBtn title='-' onClick={decreaseCount} />
    </div>
  );
}

export default OrderCounter;
