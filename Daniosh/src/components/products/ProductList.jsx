import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../ProductItem";
import "./ProductsList.css";
import ProductForm from "../productForm/ProductForm";
export default function ProductList() {
  const [products, SetProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://667d1a00297972455f63775c.mockapi.io/daniosh"
      );
      console.log(response);
      SetProducts(response.data);
      //   console.log("productsArray", products);
    } catch (error) {
      console.error("error fetching products", error);
    }
  };
  useEffect(() => {
    checkAdminCredintials();
    fetchProducts();
  }, []);

  const checkAdminCredintials = () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    console.log(email);
    if (email === "admin@gmail.com" && password === "admin123") {
      setIsAdmin(true);
    }
  };
  const handelCreateProduct = async (newProduct) => {
    try {
      const response = await axios.post(
        "https://667d1a00297972455f63775c.mockapi.io/daniosh",
        newProduct
      );
      SetProducts([...products, response.data]);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await axios.put(
        `https://667d1a00297972455f63775c.mockapi.io/daniosh/${updatedProduct.id}`,
        updatedProduct
      );
      SetProducts(
        products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      setEditProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(
        `https://667d1a00297972455f63775c.mockapi.io/daniosh/${productId}`
      );
      SetProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div className="productsList">
      {isAdmin && (
        <ProductForm
          onSubmit={editProduct ? handleUpdateProduct : handelCreateProduct}
          product={editProduct}
          onCancel={() => setEditProduct(null)}
        />
      )}

      {products.map((products) => (
        <ProductItem
          key={products.id}
          products={products}
          isAdmin={isAdmin}
          className="product"
          onEdit={isAdmin ? setEditProduct : null}
          onDelete={isAdmin ? handleDeleteProduct : null}
        />
      ))}
    </div>
  );
}
