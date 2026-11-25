
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Đắc Nhân Tâm",
    price: 86000,
    image: "/images/books/dac-nhan-tam.jpg",
    category: "Kỹ năng sống",
    stock: 12,
  },
  {
    id: 2,
    name: "Nhà Giả Kim",
    price: 79000,
    image: "/images/books/nha-gia-kim.jpg",
    category: "Văn học",
    stock: 8,
  },
  {
    id: 3,
    name: "Atomic Habits",
    price: 120000,
    image: "/images/books/atomic-habits.jpg",
    category: "Phát triển bản thân",
    stock: 0,
  },
  {
    id: 4,
    name: "Tâm Lý Học Về Tiền",
    price: 110000,
    image: "/images/books/tam-ly-hoc-ve-tien.jpg",
    category: "Kinh doanh",
    stock: 15,
  },
  {
    id: 5,
    name: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    price: 90000,
    image: "/images/books/tuoi-tre-dang-gia-bao-nhieu.jpg",
    category: "Kỹ năng sống",
    stock: 10,
  },
  {
    id: 6,
    name: "Deep Work",
    price: 135000,
    image: "/images/books/deep-work.jpg",
    category: "Phát triển bản thân",
    stock: 6,
  },
];
