const express = require ('express');


//import Routes
const RegistrationRouter= require("./routes/usersRouter");

const app = express();
const PORT = 5000;

app.use ((req, res,next)=>{
  // console.log ("Request=>", newDate());
  next();
});

app.use("/api/users/", RegistrationRouter);

app.listen (PORT, ()=> console.log(`server running on port ${PORT}`))