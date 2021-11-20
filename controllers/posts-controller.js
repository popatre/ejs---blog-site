const { Post } = require("../models/db");

exports.viewPost = (req, res, next) => {
    const param = req.params.post;
    Post.findById(param, (err, posts) => {
        res.render("post", { title: posts.title, body: posts.content });
    });
};
