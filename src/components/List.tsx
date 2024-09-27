import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Product from "./Product";
import { calculateTotalOfProducts } from "../utils/utils";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>List will be here</h1>
      <h2>{calculateTotalOfProducts(products)}</h2>
      {products.map((product) => (
        <Product {...product} key={product.title} />
      ))}
    </div>
  );
};

export default List;
