/* eslint-disable react/prop-types */
import "./products/ProductItem.css";
export default function ProductItem({ products, onEdit, onDelete, isAdmin }) {
  //   console.log("product from prodet item component ", products);
  return (
    <>
      <div className="productContainer">
        <img src={products.image} alt={products.name} />
        <h2>{products.name}</h2>
        <p>{products.description}</p>
        <p>$ {products.price}</p>
        <button>Add to cart</button>
        {isAdmin && (
          <>
            <button onClick={() => onEdit(products)}>Edit</button>
            <button onClick={() => onDelete(products.id)}>Delete</button>
          </>
        )}
      </div>
    </>
  );
}
