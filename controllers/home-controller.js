const { postSchema, Post } = require("../models/db");

const homeStartingContent =
    "This blog aims to be a place for people to anonymously blog their daily stories. They can post an entry of their day, and know that someone else will read it";

exports.getAllPosts = (req, res, next) => {
    Post.find({}, (err, posts) => {
        res.render(
            "home.ejs",

            { homeStartingContent, posts: posts }
        );
    });
};
