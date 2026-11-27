import { products } from "../src/data/products.ts";

import {
  addToCart,
  updateQuantity,
  removeFromCart,
  countItems,
  calcTotal,
} from "../src/utils/cart.ts";

import type { CartItem } from "../src/utils/cart.ts";

import { formatPrice } from "../src/utils/format.ts";

import {
  filterProducts,
  getCategories,
  searchByPriceRange,
  groupByCategory,
} from "../src/utils/product.ts";

console.log("\n=== KIỂM THỬ GIỎ HÀNG ===");

let cart: CartItem[] = [];

cart = addToCart(cart, products[0]);
cart = addToCart(cart, products[0], 2);
cart = addToCart(cart, products[3]);

console.log("Số sản phẩm:", countItems(cart));

console.log("Tổng tiền:", formatPrice(calcTotal(cart)));

cart = updateQuantity(cart, products[0].id, 1);

cart = removeFromCart(cart, products[3].id);

console.log(
  "Giỏ hàng:",
  cart.map((i) => `${i.product.name} x${i.quantity}`),
);

console.log("\n=== DANH MỤC SÁCH ===");

console.log("Danh mục:", getCategories(products));

console.log("\n=== LỌC SẢN PHẨM ===");

console.log(
  "Kỹ năng sống, giá tăng dần:",
  filterProducts(products, {
    category: "Kỹ năng sống",
    sort: "asc",
  }).map((p) => p.name),
);

console.log(
  "Tìm 'tâm', tối đa 100k:",
  filterProducts(products, {
    keyword: "tâm",
    maxPrice: 100000,
  }).map((p) => p.name),
);

console.log("\n=== TÌM KIẾM THEO KHOẢNG GIÁ ===");

const booksInRange = searchByPriceRange(
  products,
  80000,
  120000,
);

console.log("Sách từ 80.000 đ đến 120.000 đ:");

console.table(
  booksInRange.map((p) => ({
    name: p.name,
    price: formatPrice(p.price),
  })),
);

console.log("\n=== THỐNG KÊ THEO DANH MỤC ===");

console.log(groupByCategory(products));

console.log("\n=== SÁCH SẮP HẾT HÀNG ===");

const lowStockProducts = products.filter(
  (p) => p.stock >= 1 && p.stock <= 5,
);

console.table(
  lowStockProducts.map((p) => ({
    name: p.name,
    stock: p.stock,
  })),
);