import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { MdDateRange } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineBook } from "react-icons/ai";
import { listProducts } from "../actions/productActions";
import { issueBook } from "../actions/issueBookActions";
import { toast } from "react-toastify";

const IssueBookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const maxReturnDays = 5;

  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList ;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // Declare maxReturnDate variable in component scope
  let maxReturnDate = "";

const handleSubmit = async (e) => {
  e.preventDefault();

  const issuedDate = new Date().toISOString().slice(0, 10);
  const maxReturnTimestamp =
    Date.parse(issueDate) + maxReturnDays * 24 * 60 * 60 * 1000;
  const maxReturnDate = new Date(
    Math.min(
      maxReturnTimestamp,
      Date.now() + maxReturnDays * 24 * 60 * 60 * 1000
    )
  ).toISOString();

  if (!returnDate) {
    const maxReturnDateObj = new Date(issueDate);
    maxReturnDateObj.setDate(maxReturnDateObj.getDate() + maxReturnDays);
    setReturnDate(maxReturnDateObj.toISOString().slice(0, 10));
  }

  try {
    await dispatch(
      issueBook({ title, userId: userInfo._id, issuedDate, returnDate })
    );
    toast.success("Book issued successfully");
    navigate("/dashboard");
  } catch (error) {
    toast.error("Error issuing book. Please try again.");
    console.error(error);
  }
};


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>
          <AiOutlineBook /> Book Title
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          list="bookTitles"
        />
        <datalist id="bookTitles">
          {products &&
            products.map((book) => (
              <option key={book._id} value={book.title} />
            ))}
        </datalist>
      </Form.Group>

      <Form.Group controlId="formBasicUserId">
        <Form.Label>
          <BsPersonFill /> User ID
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicIssueDate">
        <Form.Label>
          <MdDateRange /> Issue Date
        </Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter issue date"
          value={issueDate}
          onChange={(e) => setIssueDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicReturnDate">
        <Form.Label>Return Date (maximum {maxReturnDays} days)</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter return date"
          value={returnDate}
          min={issueDate}
          max={maxReturnDate}
          onChange={(e) => setReturnDate(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Issue Book
      </Button>
    </Form>
  );
};

export default IssueBookForm;
