import "./style.css";
import Product from "../../components/Product";
import { getData } from "../../api/productList";
import { useEffect, useState, useContext } from "react";
import { context as ThemeContext } from "../../context/Theme";

const Home = () => {
  const [listData, setlistData] = useState("");
  const [search, setSearch] = useState("");
  const { theme, setTheme, price, setPrice } = useContext(ThemeContext);

  useEffect(() => {
    getData()
      .then((res) => {
        setlistData(res);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(listData);
  }, []);

  return (
    <div className={theme ? "home" : "home black"}>
      <p>{theme}</p>
      <p>
        Total price :<span>{price} </span>
      </p>
      <button
        onClick={() => {
          setTheme(!theme);
        }}
      >
        Change Theme
      </button>
      <input
        type="text"
        className="filter"
        placeholder="search"
        onChange={(e) => {
          setSearch(e.prevent.value);
          console.log(e.prevent.value);
          //   data.filter()
        }}
      />
      <h1>Products</h1>
      {listData.length > 0
        ? listData.map((item) => {
            return (
              <div>
                <Product
                  data={item}
                  key={item.id}
                  totalPrice={price}
                  setPrice={setPrice}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Home;
