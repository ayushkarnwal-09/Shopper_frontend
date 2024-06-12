import { useRef } from "react";
import Hero from "../Components/Hero/Hero";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";

const Shop = () => {
  const new_collections = useRef();
  return (
    <div>
      <Hero new_collections={new_collections} />
      <Popular />
      <Offers />
      <NewCollection new_collections={new_collections} />
      <NewsLetter />
    </div>
  );
};
export default Shop;
