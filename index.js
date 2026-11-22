
const express = require('express');
const app = express();
const courseRoutes = require('./routes/courses.route');

app.use(express.json());

app.use('/', courseRoutes);


app.listen(5000, () => {
    console.log("server is running on port 5000");
});
