import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 1304;

// link to this API: http://localhost:1304

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", (req,res) => {
    try {
        res.json(posts);
    } catch (error) {
        res.json({error: `There was an error getting all the posts`});
    }
});

app.post("/new/:title/:content/:author", (req,res) => {
    try {
        const newPost = {
            id: posts.length + 1,
            title: req.params.title,
            content: req.params.content,
            author: req.params.author
        };
        posts.push(newPost);
        res.json(posts);
    } catch (error) {
        res.json({error: `There was an error with posting`});
    }
});

app.patch("/edit/:id/:title/:content/:author", (req,res) => {
    try {
        const id = parseInt(req.params.id);
        console.log(req.params.title);
        const editedPost = {
            id: id,
            title: req.params.title,
            content: req.params.content,
            author: req.params.author
        };
        console.log(editedPost);
        const searchIndex = posts.findIndex((post) => post.id === id);
        console.log(searchIndex);
        posts[searchIndex] = editedPost;
        res.json(posts[searchIndex]);
    } catch (error) {
        res.json({error: `There was an error editing the post`});
    }
});

app.delete("/delete/:id", (req,res) => {
    try {
        const id = parseInt(req.params.id);
        const searchIndex = posts.findIndex((post) => post.id === id);
        if (searchIndex > -1) {
            posts.splice(searchIndex, 1);
            res.send(`post no.${id} has been deleted`);
        } else {
            res.status(400).json({error: `Post with id ${id} not found. No posts were deleted.`});
        }
    } catch (error) {
        res.json({error: `There was an error deleting the post with id ${req.params.id}`});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});