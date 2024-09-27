import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Product from "./Product";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>List will be here</h1>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </div>
  );
};

export default List;
