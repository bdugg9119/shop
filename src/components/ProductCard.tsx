import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/CartContext";

import { formatCurrency } from '../utils/funcs';
import { Product } from "../utils/types";

const ProductCard = ({
  category,
  description,
  id,
  image,
  price,
  title
}: Product) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        height='200'
        src={image}
        style={{objectFit: 'cover'}}
        variant='top'
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content space-between align-items-baseline mb-4'>
          <span className='fs-2'>{title}</span>
          <span className='ms-2 text-muted'>{formatCurrency(parseFloat(price))}</span>
        </Card.Title>
        <div className='mt-auto'>
          {quantity === 0 
            ? (<Button className='w-100' onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>) 
            : (
                <div
                  className='d-flex align-items-center flex-column'
                  style={{gap: '0.5rem'}}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{gap: '0.5rem'}}
                  >
                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                    <span className="fs-3">{quantity}</span> in cart
                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                  </div>
                    <Button
                      variant='danger'
                      size='sm'
                      onClick={() => removeFromCart(id)}
                    >
                      Remove
                    </Button>
                </div>
              )
          }
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;