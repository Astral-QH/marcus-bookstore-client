import type { Product } from "../data/products";
import { formatPrice } from "../utils/format";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const outOfStock = product.stock === 0;

  return (
    <div className="product-card">
      {/* Khu vực ảnh bìa sách */}
      <div className="product-image">
        {outOfStock && <span className="out-of-stock">Hết hàng</span>}

        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      {/* Thông tin sách */}
      <div className="product-body">
        <span className="product-category">{product.category}</span>

        <h3>{product.name}</h3>

        <p className="product-price">{formatPrice(product.price)}</p>

        <button className="btn" disabled={outOfStock}>
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
