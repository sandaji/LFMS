import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "ijamy sandaji",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456", 10),
      isAdmin: true,
    },
    {
      name: "ijamy vincent",
      email: "user@example.com",
      password: bcrypt.hashSync("123456", 10),
    },
    {
      name: "sandaji vincent",
      email: "sandaji@example.com",
      password: bcrypt.hashSync("123456", 10),
    },
  ],
  products: [
    {
      title: "Book One",
      coverImage: "/images/p2.jpg",
      description: "Physic class eleven th part one",
      author: "ijamy vincent",
      category: "Science",
      stock: 3,
      rating: 4.5,
      numReviews: 4,
    },
    {
      title: "Book Two",
      coverImage: "/images/p2.jpg",
      description: "Physic class eleven th part two",
      author: "Bharti PUB",
      category: "Science",
      countInStock: 10,
      rating: 4.0,
      numReviews: 4,
    },
    {
      title: "Book Three",
      coverImage: "/images/p2.jpg",
      description: "Electronic class eleven th part three",
      author: "BalaJi PUB",
      category: "Electronics",
      countInStock: 5,
      rating: 3,
      numReviews: 3,
    },
    {
      title: "Book Four",
      coverImage: "/images/p2.jpg",
      description: "Electronic class five th part one",
      author: "BalaJi PUB",
      category: "Electronics",
      countInStock: 10,
      rating: 5,
      numReviews: 3,
    },
    {
      title: "Book Five",
      coverImage: "/images/p2.jpg",
      description: "Math book class eleven th part one",
      author: "ijamy vincent",
      category: "Math",
      countInStock: 7,
      rating: 3.5,
      numReviews: 2,
    },
    {
      title: "Book Six",
      coverImage: "/images/p2.jpg",
      description: "Math class eleven th part Two",
      author: "james juma",
      category: "Math",
      countInStock: 0,
      rating: 4,
      numReviews: 4,
    },
  ],
  messages: [
    {
      subject: "Admin User",
      message: "bnv  vyfdv efyd  fretdgedyc",
    },
    {
      subject: "Adminfser",
      message: "bnv  vyfdv efyd  fretdgedyc",
    },
    {
      subject: "ytruiygfryu",
      message: "fyudcvb vdfhcxbvfdxcbyujdfvcx ",
    },
    {
      subject: "Admin User",
      message: "bnv  vyfdv efyd  fretdgedyc",
    },
  ],
};
export default data;
