export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <h3>Marcus Bookstore</h3>

        <p>
          © {year} Marcus Bookstore. Nơi kết nối tri thức và đam mê đọc sách.
        </p>

        <p>Hotline: 1900 0000</p>

        <p>Email: marcusbookstore@example.com</p>
      </div>
    </footer>
  );
}
