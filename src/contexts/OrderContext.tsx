import { createContext, ReactNode, useState } from "react";

interface OrdersContextProvider {
  children: ReactNode;
}

export interface Order {
  id?: string;
  title: string;
  valueCoffee: number;
  typeCoffee: string;
  amountCoffee: number;
}

/* vamos criar uma interface para utilizarmos em nosso contexto, para facilitar a tipagem */
interface OrdersContextType {
  orders: Order[];
  createNewOrder: (data: Order) => void;
  setItemsAmount: (itemsAmount: number) => void;
  handleSumItemsAmount: () => void;
  totalPayable: number;
  itemAmount: number;
}

export const OrdersContext = createContext({} as OrdersContextType);

export function OrdersContextProvider({ children }: OrdersContextProvider) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPayable, setTotalPayable] = useState(1);

  function createNewOrder(data: Order) {
    console.log(data.amountCoffee);
    const newOrder: Order = {
      id: data.title,
      title: data.title,
      valueCoffee: data.valueCoffee,
      typeCoffee: data.typeCoffee,
      amountCoffee: data.amountCoffee,
    };
    orders.map((item, i) => {
      newOrder.id === item.id
        ? (orders.splice(i, 1),
          (item.amountCoffee =
            newOrder.amountCoffee)) /* aqui está fazendo o update da quantidade */
        : "";
    });
    setOrders((state) => [...state, newOrder]);
  }

  function setItemsAmount(itemsAmount: number) {
    setItemAmount(itemsAmount);
  }
  function handleSumItemsAmount() {
    let valueAmount = 0;
    orders.map((item) => {
      valueAmount = valueAmount + item.valueCoffee * item.amountCoffee;
      console.log(item.valueCoffee);
    });
    console.log(valueAmount);
  }
  return (
    <OrdersContext.Provider
      value={{
        orders,
        createNewOrder,
        setItemsAmount,
        itemAmount,
        totalPayable,
        handleSumItemsAmount,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
