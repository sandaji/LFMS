import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/userActions";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ListUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLists = useSelector((state) => state.userLists);
  const { loading, error, users } = userLists || {};

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const userDelete = useSelector((state) => state.userDelete);
  // const { success: successDelete } = userDelete || {};

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(fetchUsers());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  // const deleteHandler = (id) => {
  //   if (window.confirm("Are you sure")) {
  //     dispatch(deleteuser(id));
  //   }
  // };

  return (
    <>
      <h1>Users</h1>
      <LinkContainer to="/admin/user/create">
        <Button className="my-3">
          <i className="fas fa-plus"></i> LIst Of Users
        </Button>
      </LinkContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr className="bg-success" variant="success">
              <th>No.</th>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>isAdmin</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => (
              <tr key={user._id}>
                <td>1</td>
                <td className="text-capitalize fw-bold">{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin}</td>
                <td className="mx-auto d-flex gap-3">
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant="info" className="btn-sm">
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    // onClick={() => deleteHandler(user._id)}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ListUsers;
