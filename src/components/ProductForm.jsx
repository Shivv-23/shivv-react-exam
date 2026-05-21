import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/product/productSlice";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.category || !form.image) {
      alert("All fields required");
      return;
    }

    dispatch(addProduct({ ...form, id: Date.now() }));
    navigate("/");
  };

  return (
    <div className="container mt-3">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
        <input
          className="form-control"
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Category"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Image URL"
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
} 