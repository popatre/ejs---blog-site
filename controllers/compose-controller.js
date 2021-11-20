const { Post } = require("../models/db");

exports.showCompose = (req, res, next) => {
    res.render("compose");
};

exports.postNewPost = (req, res, next) => {
    const { postContent, postTitle } = req.body;

    const post = new Post({ title: postTitle, content: postContent });
    post.save((err) => {
        if (!err) {
            res.redirect("/");
        }
    });
};
