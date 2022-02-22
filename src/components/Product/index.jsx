import "./style.css";

const Product = ({ data, setPrice, totalPrice }) => {
  const {
    availableSizes,
    currencyFormat,
    currencyId,
    description,
    id,
    installments,
    isFreeShipping,
    price,
    style,
    title,
  } = data;
  return (
    <div className="product" key={id}>
      <ul>
        <li>
          <strong>Title:</strong>
          <span>{title}</span>
        </li>
        <li>
          <strong>Style:</strong>
          <span>{style}</span>
        </li>
        <li>
          <strong>Price:</strong>
          <span>{price}</span>
        </li>
        <li>
          <strong>Description:</strong>
          <span>{description}</span>
        </li>
        <li>
          <strong>Free shipping:</strong>
          <span>{isFreeShipping ? "free" : "not"}</span>
        </li>
        <li>
          <button
            onClick={() => {
              setPrice(totalPrice + price);
            }}
          >
            Add
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Product;
