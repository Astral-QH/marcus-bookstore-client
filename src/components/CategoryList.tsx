type Props = {
  categories: string[];
};

export default function CategoryList({ categories }: Props) {
  return (
    <section className="container">
      <h2>Danh mục sản sách</h2>

      <div className="category-list">
        {categories.map((category) => (
          <button key={category}>
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}