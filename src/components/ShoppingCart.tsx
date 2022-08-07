import { Offcanvas, Stack } from "react-bootstrap";

import { CartItem } from "./index";
import { useShoppingCart } from "../context/CartContext";
import { ShoppingCartProps } from "../utils/types";
import { formatCurrency } from "../utils/funcs";
import { useCatalog } from "../context";

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { data } = useCatalog();
  const { cartItems, closeCart } = useShoppingCart();

  const cartTotal = formatCurrency(cartItems.reduce((total, cartItem) => {
    const item = data?.find(i => i.id === cartItem.id)
    console.log('item: ', item);
    console.log('total: ', total);
    return total + (parseFloat(item?.price ||'0')) * cartItem.quantity;
  }, 0));

  return (
    <Offcanvas
      onHide={closeCart}
      placement='end'
      show={isOpen}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => <CartItem key={item.id} {...item} />)}
          <div className="ms-auto fw-bold fs-5">
            Total: {cartTotal}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
};

export default ShoppingCart;