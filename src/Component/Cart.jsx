import "./Cart.css";
import { products } from "./product";

import Rating0 from "../ratings/rating-0.png";
import Rating0_5 from "../ratings/rating-05.png";
import Rating1 from "../ratings/rating-10.png";
import Rating1_5 from "../ratings/rating-15.png";
import Rating2 from "../ratings/rating-20.png";
import Rating2_5 from "../ratings/rating-25.png";
import Rating3 from "../ratings/rating-30.png";
import Rating3_5 from "../ratings/rating-35.png";
import Rating4 from "../ratings/rating-40.png";
import Rating4_5 from "../ratings/rating-45.png";
import Rating5 from "../ratings/rating-50.png";

const Shopping = () => {
  const ratingImages = (stars) => {
    if (stars === 0) return Rating0;
    else if (stars === 0.5) return Rating0_5;
    else if (stars === 1) return Rating1;
    else if (stars === 1.5) return Rating1_5;
    else if (stars === 2) return Rating2;
    else if (stars === 2.5) return Rating2_5;
    else if (stars === 3) return Rating3;
    else if (stars === 3.5) return Rating3_5;
    else if (stars === 4) return Rating4;
    else if (stars === 4.5) return Rating4_5;
    else return Rating5;
  };

  return (
    <div className="contaner">
      {products.map((item) => (
        <div key={item.id} className="border">
          <div className="img-foto">
            <img className="img-foto" src={item.image} alt="logo" />
          </div>
          <p className="name">{item.name}</p>
          <p className="price"> ${item.priceCents}</p>
          <img className="foto-reiting" src={ratingImages(item.rating.stars)} />
          <span className="count">{item.rating.count}</span>
          <br />
          <button className="button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shopping;
