import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import reservationRoute from "./routes/reservationRoute.js";
import messageRoute from "./routes/messageRoute.js"
import bookRoute from "./routes/bookRequestRoute.js"
import productIssueRoutes from "./routes/productIssueRoute.js";
import seedRouter from "./routes/seedRouter.js";


const app = express();
dotenv.config();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reservations", reservationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/bookrequests", bookRoute);
app.use("/api/issues", productIssueRoutes);
app.use("/api/seeder", seedRouter);
app.use(notFound);
app.use(errorHandler);



const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} at http://localhost:${port}`
  )
);
