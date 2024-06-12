import "./NewCollection.css";
import Item from "../Item/Item";
import { useEffect, useRef, useState } from "react";

const NewCollection = ({ new_collections }) => {
  const [new_collection, setNew_collection] = useState([]);
  useEffect(() => {
    fetch("https://shopper-backend-pmns.onrender.com/newcollections")
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);
  return (
    <>
      <div ref={new_collections} className="new-collections">
        <h1>New Collection</h1>
        <hr />
        <div className="collections">
          {new_collection.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default NewCollection;
