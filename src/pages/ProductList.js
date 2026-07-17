import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {
        products.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              width="120"
            />
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`}>
              Xem chi tiết
            </Link>
            <hr />
          </div>
        ))
      }
    </div>
  );
}
export default ProductList;