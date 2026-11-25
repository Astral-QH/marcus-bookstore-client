
import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">

      {/* Khu vực ảnh bìa sách */}
      <div className="product-image">

        {product.stock === 0 && (
          <span className="out-of-stock">
            Hết hàng
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      {/* Thông tin sách */}
      <div className="product-body">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} đ
        </p>

        <button
          className="btn"
          disabled={product.stock === 0}
        >
          Thêm vào giỏ
        </button>

      </div>
    </div>
  );
}
