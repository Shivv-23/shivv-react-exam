import { useDispatch } from "react-redux";
import {
  deleteProduct,
  updateProduct,
} from "../features/product/productSlice";
import { useState } from "react";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(product);

  const handleUpdate = () => {
    dispatch(updateProduct(form));
    setEdit(false);
  };

  return (
    <div className="card p-2 m-2" style={{ width: "18rem" }}>
      {edit ? (
        <>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <button onClick={handleUpdate} className="btn btn-success btn-sm">
            Save
          </button>
        </>
      ) : (
        <>
          <img src={product.image} height="120" />
          <h5>{product.title}</h5>
          <p>${product.price}</p>

          <button
            onClick={() => setEdit(true)}
            className="btn btn-warning btn-sm mb-1"
          >
            Edit
          </button>

          <button
            onClick={() => dispatch(deleteProduct(product.id))}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}