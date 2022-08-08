import { Col, Row } from 'react-bootstrap';

import { ProductCard } from '../components';
import { useCatalog } from '../context';

const Store = () => {
  const { data } = useCatalog();

  return (
    <Row md={2} xs={1} lg={3} className='g-3'>
        {data?.map(product => (
          <Col key={product.id}>
            <ProductCard {...product}/>
          </Col>
        ))}
    </Row>
  );
};

export default Store;