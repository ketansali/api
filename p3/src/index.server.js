const express = require('express');
const app = express();
const env = require('dotenv');
env.config();

const mongoose = require('mongoose');
const User = require('./routes/user');
mongoose.connect(`mongodb://${process.env.USER}:${process.env.PASSWORD}/${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successfully");
}).catch((error) => {
    console.log(error)
})

app.use(express.json())
app.use('/api', User)


app.listen(process.env.PORT, () => {
    console.log(`serever is running on PORT ${process.env.PORT}`)
})