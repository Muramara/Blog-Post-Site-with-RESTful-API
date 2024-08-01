import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 1300;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req,res) => {
    try {
        const response = await axios.get("http://localhost:1304");
        res.render("index.ejs",{
            posts: response.data
        });
    } catch (error) {
        res.render("failure.ejs",{
            error: `There was an error getting the content`
        });
    }
});

app.post("/post", async (req,res) => {
    try {
        const response = await axios.post("http://localhost:1304/new");
        res.render("success.ejs",{
            message: `Post successfully recorded`
        });
    } catch (error) {
        res.render("failure.ejs",{
            error: `There was an error posting the content`
        });
    }
});

app.post("/edit", async (req,res) => {
    try {
        const id = parseInt(req.body.id);
        const response = await axios.patch("http://localhost:1304/edit/"+id);
        res.render("success.ejs",{
            message: `Post successfully edited`
        });
    } catch (error) {
        res.render("failure.ejs",{
            error: `There was an error editing the content`
        });
    }
});

app.post("/delete", async (req,res) => {
    try {
        const id = parseInt(req.body.id);
        const response = await axios.delete("http://localhost:1304/delete/"+id);
        res.render("success.ejs",{
            message: `Post successfully deleted`
        });
    } catch (error) {
        res.render("failure.ejs",{
            error: `There was an error deleting the content`
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});