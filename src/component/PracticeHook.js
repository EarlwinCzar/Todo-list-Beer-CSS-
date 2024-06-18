import React, { useState } from "react";
import "../styles/practicehook.css";

function PracticeHook() {
  const [cart, setCart] = useState({
    cartCount: 0,
    cartTotalPrice: 0,
    cartItems: [],
  });

  const [products, setProducts] = useState({
    Product: [
      {
        name: "Shampoo",
        price: 20,
        stock: 5,
      },
      {
        name: "Toothpaste",
        price: 15,
        stock: 3,
      },
      {
        name: "Facial Wash",
        price: 10,
        stock: 10,
      },
      {
        name: "Soap",
        price: 23,
        stock: 11,
      },
      {
        name: "Cylinder",
        price: 21,
        stock: 3,
      },
    ],
  });

  const [isToggled, setToggled] = useState(false);

  const handleShowDetails = () => {
    setToggled(!isToggled);
  };

  const handleAddToCart = (index, element) => {
    // Check if the stock is greater than 0 before adding to cart
    if (element.stock > 0) {
      const updatedCartCount = cart.cartCount + 1;
      const updatedCartItems = [...cart.cartItems, element.name];
      const updatedCartTotalPrice = cart.cartTotalPrice + element.price; // Calculate updated total price

      // Update cart count, cart items, and total price
      setCart({
        ...cart,
        cartCount: updatedCartCount,
        cartItems: updatedCartItems,
        cartTotalPrice: updatedCartTotalPrice,
      });

      // Update product stock only if it's greater than 0
      if (products.Product[index].stock > 0) {
        const updatedProducts = [...products.Product];
        updatedProducts[index] = {
          ...updatedProducts[index],
          stock: updatedProducts[index].stock - 1,
        };

        // Ensure stock doesn't go negative
        if (updatedProducts[index].stock >= 0) {
          setProducts({
            Product: updatedProducts,
          });
        }
      }
    }
  };
  return (
    <>
      <div className="cart">
        <div className="cart-container">
          <p>Cart: {cart.cartCount} </p>
          <button onClick={handleShowDetails}>Show details</button>
        </div>
        {isToggled && (
          <div className="cart-details">
            <p>Total items in the cart: {cart.cartCount}</p>
            <p>Total price in the cart: {cart.cartTotalPrice}</p>
            {cart.cartItems.map((element) => (
              <p>Items in the Cart: {element}</p>
            ))}
          </div>
        )}
      </div>
      <br />

      <div className="products">
        <div className="product-container">
          {products.Product.map((element, index) => (
            <div key={index}>
              <h4>{element.name}</h4>
              <p>{element.price}</p>
              <p>{element.stock}</p>
              <button onClick={() => handleAddToCart(index, element)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PracticeHook;
