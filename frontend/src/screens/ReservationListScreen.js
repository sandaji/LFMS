import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import {
  cancelReservation,
  approveReservation,listReservations
} from "../actions/ReservationActions";

const ReservationList = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservationList || {});

  useEffect(() => {
    // Load reservations from database when component mounts
    dispatch(listReservations());
  }, [dispatch]);

  const handleCancelClick = (reservation) => {
    if (window.confirm("Are you sure you want to cancel this reservation?")) {
      dispatch(cancelReservation(reservation));
    }
  };

  const handleApproveClick = (reservation) => {
    dispatch(approveReservation(reservation));
  };

  return (
    <div>
      <h2>Reserved Items</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>User</th>
            <th>Reservation Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations && reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.product._id}</td>
              <td>{reservation.userInfo.name}</td>
              <td>{new Date(reservation.createdAt).toLocaleString()}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleApproveClick(reservation)}
                >
                  <FaCheck />
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleCancelClick(reservation)}
                >
                  <FaTimes />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReservationList;
