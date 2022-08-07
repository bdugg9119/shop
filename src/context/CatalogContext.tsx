import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';

import {
  CatalogContext as CatalogContextType,
  Product,
  ProviderProps
} from "../utils/types";

const getProductCatalog = async (): Promise<Product[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();

const CatalogContext = createContext({} as CatalogContextType);

export const useCatalog = () => useContext(CatalogContext);

export const CatalogProvider = ({children}: ProviderProps) => {
  const { data, isLoading, error } = useQuery<Product[]>(['products'], getProductCatalog);

  return (
    <CatalogContext.Provider 
      value={{
        data,
        error,
        isLoading
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};
