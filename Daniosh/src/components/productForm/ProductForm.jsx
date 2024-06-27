import { useEffect, useState } from "react";

export default function ProductForm({ onSubmit, product, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData({
        name: "",
        description: "",
        price: "",
        image: "",
      });
    }
  }, [product]);
  return (
    <form onSubmit={handelSubmit}>
      <h2>Add A t-shirt</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <button type="submit">{product ? "Update" : "Add"}</button>
      {product && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
