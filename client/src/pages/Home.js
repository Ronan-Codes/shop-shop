import React from "react";
// { usestate } is not used anymore 

import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

import Cart from '../components/Cart';

const Home = () => {
  // const [currentCategory, setCategory] = useState("");

  // return (
  //   <div className="container">
  //     <CategoryMenu setCategory={setCategory} />
  //     <ProductList currentCategory={currentCategory} />
  //   </div>
  // );

  // Replaced by 

  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
