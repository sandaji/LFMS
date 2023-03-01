import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  reservedAt: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date,
    default: function() {
      const date = new Date();
      date.setDate(date.getDate() + 3); // Due date is 3 days from now
      return date;
    }
  },
  returnedAt: {
    type: Date,
    default: null
  },
  fine: {
    type: Number,
    default: 0
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
