
import Reservation from "../models/reservationModel.js";

export const createReservation = async (req, res) => {
  try {
    const { reservedBook, user } = req.body;
    const reservation = await Reservation.create({ reservedBook, user });
    res.status(201).json(reservation);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create reservation" });
  }
};