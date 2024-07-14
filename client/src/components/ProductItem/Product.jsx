import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Fetching items...");
    axios
      .get("http://localhost:4000/api/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the items!", error);
      });
  }, []);

  return (
    <div>
      <ul className="items-container">
        {items.map((item) => (
          <li key={item._id}>
            <HomeItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
