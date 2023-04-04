import mongoose from "mongoose";

const reservationSchema = mongoose.Schema(
  {
    reservedBook: [
      {
        title: { type: String, required: true },
        author: { type: String, required: true },
        coverImage: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        }, user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
      },
    ],
   
    reservedAt: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      default: function () {
        const date = new Date();
        date.setDate(date.getDate() + 3); // Due date is 3 days from now
        return date;
      },
    },
    returnedAt: {
      type: Date,
      default: null,
    },
    fine: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;