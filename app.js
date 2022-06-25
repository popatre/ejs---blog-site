const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const _ = require("lodash");
const { postSchema, Post } = require("./models/db");

const { getAllPosts } = require("./controllers/home-controller");
const {
    showCompose,
    postNewPost,
} = require("./controllers/compose-controller");
const { viewPost } = require("./controllers/posts-controller");
const app = express();

mongoose.connect(
    "mongodb+srv://admin-jon:qwerty111@cluster0.bmmtfjt.mongodb.net/?retryWrites=true&w=majority/blogDB",
    { useNewUrlParser: true }
);
postSchema;
Post;

const aboutContent =
    "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
    "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// const posts = [];
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views/"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", getAllPosts);
app.get("/about", (req, res, next) => {
    res.render("about", { aboutContent });
});
app.get("/contact", (req, res, next) => {
    res.render("contact", { contactContent });
});
app.get("/compose", showCompose);

app.post("/compose", postNewPost);

app.get("/posts/:post", viewPost);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
