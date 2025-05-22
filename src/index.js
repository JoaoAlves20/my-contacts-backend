import express from "express";

const app = express();

app.get("/", (request, response) => {
    response.status(200).json({ msg: "hello world" });
})

app.listen(3000, () => {
    console.log("Server runner in http://localhost:3000");
})