import "./product.css";

export default function Product({ id, title, image, price, rating }) {
  return (
    <section className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button>Add to basket</button>
    </section>
  );
}
