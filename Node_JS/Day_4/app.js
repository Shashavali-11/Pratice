const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoutes = require('./routes/posts');
const errorHandler = require('./middleware/errorHandler');
const morgan = require('morgan');

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('dev'));


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MonoDB Connected.'))
    .catch(err => console.log(err));


app.use('/posts', postRoutes);
app.use(errorHandler);

app.listen(3001, (e) => {
    if(e) console.log(e);
    else console.log('Server Started..!')
})


