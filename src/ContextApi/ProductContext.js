import React from 'react'

const ProductContext = React.createContext();

const ProductProvider = ProductContext.Provider;
const ProductConsume = ProductContext.Consumer;

export {
  ProductProvider, 
  ProductConsume,
  ProductContext
}