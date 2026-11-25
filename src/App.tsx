import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

import { products } from "./data/products";

import "./App.css";

function App() {
  // Lấy danh sách thể loại sách, loại bỏ danh mục trùng lặp
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      <Header />

      <main>
        {/* Banner quảng cáo */}
        <Banner />

        {/* Danh mục sách */}
        <CategoryList categories={categories} />

        {/* Danh sách sách */}
        <ProductList title="Sách nổi bật" items={products} />
      </main>

      <Footer />
    </>
  );
}

export default App;
