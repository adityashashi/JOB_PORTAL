//packages imports

import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan'

// files imports
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js'
//config
dotenv.config();
//mongodb connection
connectDB();
//rest objects
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan(`dev`));

//routes
app.use('/api/v1/test',testRoutes)
//port
const PORT = process.env.PORT || 8080
//listen
app.listen(PORT, () => {
    console.log(`Node Server running in ${process.env.DEV_MODE} Mode port no ${PORT}`.bgCyan.white);
});