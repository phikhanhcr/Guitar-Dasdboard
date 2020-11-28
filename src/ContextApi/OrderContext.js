import React from 'react'

const OrderListContext = React.createContext();

const OrderListProvider = OrderListContext.Provider;
const OrderListConsume = OrderListContext.Consumer;

export {
  OrderListProvider, 
  OrderListConsume,
  OrderListContext
}