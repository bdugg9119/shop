import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import {Product} from '../utils/types';

const getProductCatalog = async (): Promise<Product[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();

const Store = () => {
  const { data, isLoading, error } = useQuery<Product[]>(
    ['products'],
    getProductCatalog
  );

  return <h1>Store</h1>;
};

export default Store;