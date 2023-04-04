import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Success from "./components/Success";
import {
  HomeScreen,
  ProductScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
  CartScreen,
  ListUser,
  CheckoutScreen,
  ReservationList,
  IssueProduct
} from "./screens";
import {
  AdminDashboard,
  AddBookForm,
  AdminScreen,
  IssueBookForm,
  AddUser,
  ListBooks,
  EditBooks,
}from './admin'
import MessageForm from "./forms/MessageForm";
import BookRequestForm from "./forms/BookRequestForm";
import New from "./pages/new/New"
import List from "./pages/list/List"
import ListIssuedBooksScreen from "./screens/ListIssuedBooksScreen";

function App() {
  return (
    <>
      {" "}
      <ToastContainer closeButton={false} position="top-right" />
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              {/* //public route */}
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />

              {/* //protected route */}
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/main" element={<AdminScreen />} />
              <Route path="/admin/add/user" element={<AddUser />} />
              <Route path="/messages" element={<MessageForm />}></Route>
              <Route path="/issuedbook" element={<ListIssuedBooksScreen />} />
              <Route path="/issuebook" element={<IssueBookForm />} />
              <Route path="/addbook" element={<AddBookForm />} />
              <Route path="/listusers" element={<ListUser />} />
              <Route path="/listbooks" element={<ListBooks />} />
              <Route path="/updatebooks" element={<EditBooks />} />
              <Route path="/checkout" element={<CheckoutScreen />} />
              <Route path="/success" element={<Success />} />
              <Route path="/reservations" element={<ReservationList />} />
              <Route path="/bookrequest" element={<BookRequestForm />} />
              <Route path="/new" element={<New />} />
              <Route path="/list" element={<List />} />
              <Route path="/issue" element={<IssueProduct />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
