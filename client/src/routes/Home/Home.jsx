import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeItem from "../../components/HomeItem/HomeItem";
import homeImg from "../../assets/homeImg.png";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Fetching items...");
    axios
      .get("http://localhost:4000/api/items")
      .then((response) => {
        console.log("Items fetched:", response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the items!", error);
      });
  }, []);

  return (
    <div>
      <img src={homeImg} alt="Home" className="homeImg" />
      <main>
        <ul className="items-container">
          {items.map((item) => (
            <li key={item._id}>
              <HomeItem item={item} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
