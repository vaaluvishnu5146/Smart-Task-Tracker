import React, { useEffect, useState } from "react";
import adidaslogo from "./assets/adidaslogo.png";
import { Link, Route, Routes } from "react-router";
import { Button } from "flowbite-react";

export default function Pageable() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function handleAddToCart(productId = 0) {
    const matchingProduct = products.find((e) => e.id == productId);
    if (matchingProduct) {
      setCart([...cart, matchingProduct]);
    }
  }

  function handleRemoveFromCart(productId = 0) {
    const filteredProducts = cart.filter((e) => e.id != productId);
    if (filteredProducts) {
      setCart(filteredProducts);
    }
  }

  return (
    <section className="h-screen bg-zinc-100 box-border">
      <header className="mb-5">
        <div className="w-full h-[70px] bg-black flex justify-center items-center">
          <img className="h-[50px]" src={adidaslogo} />
        </div>
        <div className="w-full h-[50px] bg-black flex justify-center items-center">
          <ul className="flex gap-x-5 text-white">
            <Link to={"/"} className="">
              Home
            </Link>
            <Link to={"/products"} className="">
              Products
            </Link>
            <Link to={"/contact"} className="">
              Contact
            </Link>
            <Link to={"/about"} className="">
              About
            </Link>
            <Link to={"/cart"}>
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </ul>
        </div>
      </header>
      <main className="px-5 box-border">
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={
              <Products
                products={products}
                handleAddToCart={handleAddToCart}
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart cart={cart} />} />
        </Routes>
      </main>
    </section>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Products({
  products = [],
  handleAddToCart = () => {},
  cart = [],
  handleRemoveFromCart = () => {},
}) {
  function checkProductAddedToCart(id = 0) {
    console.log(cart, id);
    if (cart.find((e) => e.id == id)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <h1 className="text-2xl mb-[100px]">Products</h1>
      <div className="grid grid-cols-5 gap-5">
        {products.map((el, index) => (
          <ProductCard
            id={el.id}
            key={index}
            title={el.title}
            url={el.image}
            price={el.price}
            handleAddToCart={handleAddToCart}
            isAddedToCart={checkProductAddedToCart(el.id)}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Cart({ cart = [] }) {
  return (
    <div>
      <h1 className="text-2xl mb-[100px]">Cart</h1>
      <div className="grid grid-cols-5 gap-5">
        {cart.map((el, index) => (
          <ProductCard
            id={el.id}
            key={index}
            title={el.title}
            url={el.image}
            price={el.price}
            handleAddToCart={() => {}}
            isAddedToCart={false}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCard({
  id = 0,
  title = "",
  url = "",
  price = 0,
  handleAddToCart = () => {},
  isAddedToCart,
  handleRemoveFromCart = () => {},
}) {
  return (
    <div className="h-[400px] flex flex-col border border-black p-3 box-border">
      <img className="h-[60%] mb-3" src={url} />
      <h2 className="mb-3">{title}</h2>
      <p className="mb-3">{price}</p>
      {isAddedToCart ? (
        <Button
          className="w-full bg-black"
          onClick={() => handleRemoveFromCart(id)}
        >
          Remove From Cart
        </Button>
      ) : (
        <Button className="w-full bg-black" onClick={() => handleAddToCart(id)}>
          Add To Cart
        </Button>
      )}
    </div>
  );
}
