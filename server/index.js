const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/customapi", (req, res) => {
    let id = req.query.id;
    let data = [];

    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        .then((response) => response.json())
        .then((json) => {

            json.forEach(element => {
                let item = {
                    "name": element.title,
                    "Url": element.thumbnailUrl
                }

                data.push(item);
            });

            res.json({ "payload": data })
        })



});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});