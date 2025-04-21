import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 1300;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let result = [];

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:1304");
    res.render("index.ejs", {
      posts: response.data,
    });
  } catch (error) {
    res.render("index.ejs", {
      error: `There was an error getting the content`,
    });
  }
});

app.get("/post-form", (req, res) => {
  try {
    res.render("post.ejs", {
      posting: true,
    });
  } catch (error) {
    res.render("index.ejs", {
      error: `There was an error getting the post form`,
    });
  }
});
app.post("/post", async (req, res) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    await axios.post(
      "http://localhost:1304/new/" + title + "/" + content + "/" + author
    );
    res.render("post.ejs", {
      success: true,
      message: `Post successfully recorded`,
    });
  } catch (error) {
    res.render("post.ejs", {
      failure: true,
      error: `There was an error posting the content`,
    });
  }
});

app.post("/edit-form", (req, res) => {
  try {
    res.render("edit.ejs", {
      formData: {
        id: req.body["id"],
        title: req.body["title"],
        content: req.body["content"],
        author: req.body["author"],
      },
    });
  } catch (error) {
    res.render("edit.ejs", {
      error: `There was error getting the edit form`,
    });
  }
});
app.post("/edit", async (req, res) => {
  try {
    const id = parseInt(req.body.id);
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    await axios.patch(
      "http://localhost:1304/edit/" +
        id +
        "/" +
        title +
        "/" +
        content +
        "/" +
        author
    );
    res.render("edit.ejs", {
      success: true,
      message: `Post successfully edited`,
    });
  } catch (error) {
    res.render("edit.ejs", {
      failure: true,
      error: `There was an error editing the content`,
    });
  }
});

app.post("/delete", async (req, res) => {
  try {
    const id = parseInt(req.body.id);
    const response = await axios.delete("http://localhost:1304/delete/" + id);
    res.render("index.ejs", {
      success: true,
      message: `Post successfully deleted`,
    });
  } catch (error) {
    res.render("index.ejs", {
      failure: true,
      err: `There was an error deleting the content`,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
