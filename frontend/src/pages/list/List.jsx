import "./list.scss";
import { Sidebar, Navbar } from "../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import { Loader, Message } from "../../components";
import {Table} from 'react-bootstrap'

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersList = useSelector((state) => state.usersList);
  console.log("usersList:", usersList); // for debugging
  const { loading, users, error } = usersList || {};

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(fetchUsers());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <div className="list">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <>
          <Sidebar />
          <div className="listContainer">
            <Navbar />
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr className="bg-success" variant="success">
                  <th>No.</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                      <td>1</td>
                      <td>{users._id}</td>
                      <td className="text-capitalize fw-bold">{users.name}</td>
                      <td>{users.email}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            <ul></ul>
          </div>
        </>
      )}
    </div>
  );
};

export default List;
