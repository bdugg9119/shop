import { Col, Row } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';

import { ProductCard } from '../components';
import { Product } from '../utils/types';

const getProductCatalog = async (): Promise<Product[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();

const Store = () => {
  const { data, isLoading, error } = useQuery<Product[]>(['products'], getProductCatalog);

  return (
    <Row md={2} xs={1} lg={3} className='g-3'>
      <Col>
        {data?.map(product => (
          <Col key={product.id}>
            <ProductCard {...product}/>
          </Col>
        ))}
      </Col>
    </Row>
  )
};

export default Store;