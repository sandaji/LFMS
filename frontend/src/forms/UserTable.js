import React from "react";
import { Table } from "react-bootstrap";

const UserTable = ({ users }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user, index) => (
          <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
