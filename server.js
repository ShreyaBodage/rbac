// const express = require("express");
// const mongoose = require("./config/db");
// const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/user");

// const app = express();

// app.use(express.json());
// app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const cors = require("cors"); // Import CORS
const mongoose = require("./config/db");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

