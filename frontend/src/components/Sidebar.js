import {  Nav,  Navbar ,Container} from "react-bootstrap";
import {
  FaBook,
  FaBookOpen,
  FaCaretSquareDown,
  FaGripVertical,
  FaHistory,
  FaPlus,
  FaSignOutAlt,
  FaUpload,
  FaUserEdit,
  FaUserMd,
} from "react-icons/fa";
import { useDispatch, } from "react-redux";
import { logout } from "../actions/userActions";
import "./sidebar.scss";
import { BsGear } from "react-icons/bs";

const Sidebar = () => {
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Navbar className="navbar navbar-light bg-light fixed sidebar">
      <Container fluid className="flex-grow-1 nav bg-light container-fluid">
        <Nav className="flex-column nav">
          <Nav.Link className="d-flex align-items-center" href="/dashboard">
            <BsGear className="mx-3" />
            <h4>Dashboard</h4>
          </Nav.Link>
          <h5 className="text-muted mt-3 mb-2">LISTS</h5>
          <Nav.Link className="d-flex align-items-center px-1" href="/listusers">
            <FaUserEdit className="icon mx-2" />
            Users
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center px-1" href="/listbooks">
            <FaBook className="icon mx-2" />
            Books
          </Nav.Link>
          <Nav.Link
            className="d-flex align-items-center px-1"
            href="/admin/reserved-books"
          >
            <FaBookOpen className="icon mx-2" />
            Reservations
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center px-1" href="/">
            <FaHistory className="icon mx-2" />
            Issued Books
          </Nav.Link>
          <h5 className="text-muted mt-3 mb-2">ACTIONS</h5>
          <Nav.Link
            className="d-flex align-items-center px-1"
            href="/issuebook"
          >
            <FaGripVertical className="icon mx-2" />
            Issue Book
          </Nav.Link>
          <Nav.Link
            className="d-flex align-items-center px-1"
            href="/updatebooks"
          >
            <FaUpload className="icon mx-2" />
            Update Book
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center px-1" href="/addbook">
            <FaPlus className="icon mx-2" />
            Add Book
          </Nav.Link>
          <Nav.Link
            className="d-flex align-items-center px-1"
            href="/admin/product/return"
          >
            <FaCaretSquareDown className="icon mx-2" />
            Return Book
          </Nav.Link>
          <h5 className="text-muted mt-3 mb-2">SERVICE</h5>
          <Nav.Link className="d-flex align-items-center px-1" href="/">
            <FaUserMd className="icon mx-2" />
            Profile
          </Nav.Link>
          <Nav.Link
            className="d-flex align-items-center px-1"
            onClick={signoutHandler}
            href="/"
            variant="danger"
            style={{ color: "red" }}
          >
            <FaSignOutAlt className=" mx-2" />
            <span className="text-4">Logout</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Sidebar;
