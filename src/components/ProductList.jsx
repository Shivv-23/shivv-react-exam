import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let filtered = items.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container mt-3">
      <h2>Products</h2>

      <input
        className="form-control my-2"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="form-control my-2"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      <div className="d-flex flex-wrap">
        {filtered.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}