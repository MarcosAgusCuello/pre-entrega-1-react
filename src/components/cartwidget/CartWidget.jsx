import { useState } from 'react';
import "./Cartwidget.css";
const CartWidget = () => {
  const [cartCount, ] = useState(0);

  return (
    <div className="cart-widget">
      Cart <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartWidget;