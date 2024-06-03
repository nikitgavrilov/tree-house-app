const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./src/users/routes");
const productRoutes = require("./src/products/routes");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
