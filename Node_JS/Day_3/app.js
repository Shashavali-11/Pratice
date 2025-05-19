require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./middleware/logger')
const postRoutes = require('./routes/posts')


const app = express();
const PORT = process.env.PORT

// console.log(PORT)
if(!PORT){
    throw new Error('PORT not defined in .env file..!')
}

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger);

app.get('/', (req, res) => {
    // res.send(`<h1>Welcome to the Express Blog API..!</h1>`)
    res.end("This is from ROOT_URL .")
});

app.use('/posts', postRoutes);

app.use((req, res) => {
    res.status(404).send('404 Not Found.');
});

app.listen(PORT, () => {
    console.log(`[Server Running] ${PORT} `)
})