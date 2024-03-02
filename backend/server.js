import express from 'express'
import dotenv from 'dotenv'
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';

import  UserRoutes  from './routes/User.routes.js';
import  authRoutes  from './routes/auth.routes.js';
import  exploreRoutes  from './routes/explore.routes.js';
import connectToDB from './db/connectToDb.js';
import "./passport/github.auth.js";

const app = express();
app.use(express.json())
app.use(cors())
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());



dotenv.config()
const PORT = process.env.PORT || 5000

app.use('/api/users',UserRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/explore',exploreRoutes);

app.listen(PORT,()=>{
    connectToDB();
    console.log(`Server is ready to listen on ${PORT}`)
})
