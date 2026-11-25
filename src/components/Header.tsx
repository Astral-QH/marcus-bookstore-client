export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">
          Marcus<span>Bookstore</span>
        </a>

        <nav className="nav">
          <a href="/">Trang chủ</a>
          <a href="/products">Sách</a>
          <a href="/about">Giới thiệu</a>
        </nav>

        <a href="/cart" className="cart-link">
          📚 Giỏ sách (0)
        </a>
      </div>
    </header>
  );
}
