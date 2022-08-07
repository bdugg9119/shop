import { Button, Stack } from "react-bootstrap";
import { useCatalog, useShoppingCart } from "../context";
import { formatCurrency } from "../utils/funcs";
import { CartItemProps } from "../utils/types";

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { data } = useCatalog();
  const { removeFromCart } = useShoppingCart();

  const item = data?.find(i => i.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.image}
        style={{
          height: '75px',
          objectFit: 'cover',
          width: '125px'
        }}
      />
      <div className="me-auto">
        <div>
          {item.title}{' '}
          {quantity > 1 && 
            <span className="text-muted" style={{fontSize: '0.65rem'}}>
              {quantity}x
            </span>
          }
        </div>
        <div className="text-muted" style={{fontSize: '0.75rem'}}>
          {formatCurrency(parseFloat(item.price))}
        </div>
      </div>
      <div>{formatCurrency(parseFloat(item.price) * quantity)}</div>
      <Button variant='danger' size='sm' onClick={() => removeFromCart(item.id)}>&times;</Button>
    </Stack>
  )
}

export default CartItem;