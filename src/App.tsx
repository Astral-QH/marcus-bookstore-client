import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

import { products } from "./data/products";
import { filterProducts } from "./utils/product";

import "./App.css";

function App() {
  // Lấy danh sách thể loại sách
  const categories = [...new Set(products.map((p) => p.category))];

  // Lọc sách theo giá và sắp xếp tăng dần
  const cheapProducts = filterProducts(products, {
    maxPrice: 100000,
    sort: "asc",
  });

  // Lọc sách theo danh mục kỹ năng sống
  const lifeSkillsBooks = filterProducts(products, {
    category: "Kỹ năng sống",
  });

  return (
    <>
      <Header />

      <main>
        {/* Banner quảng cáo */}
        <Banner />

        {/* Danh mục sách */}
        <CategoryList categories={categories} />

        {/* Sách nổi bật */}
        <ProductList
          title="Sách nổi bật"
          items={products}
        />

        {/* Sách giá dưới 100.000 đ */}
        <ProductList
          title="Sách giá dưới 100.000 đ"
          items={cheapProducts}
        />

        {/* Sách kỹ năng sống */}
        <ProductList
          title="Sách kỹ năng sống"
          items={lifeSkillsBooks}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
