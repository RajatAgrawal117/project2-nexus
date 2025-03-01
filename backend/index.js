const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");


const port = process.env.PORT || 4000 ;
// Middleware
app.use(express.json()); 

// CORS
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

// Routes
const userRoutes = require("./routes/user");


app.use("/api/auth", userRoutes);






// Database connection
const db = require("./config/database");
const authenticateToken = require("./middleware/authMiddleware");
db.connectDB();

// Booking Router



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });