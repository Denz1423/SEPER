const mongoose = require("mongoose");
const Article = require("../models/article");

module.exports = {
    getAll: (req, res) => {
        Article.find((err, articles) => {
            if (err) {
                return res.status(400).json(err)
            }
            if (!articles) {
                return res.status(404).json()
            }

            if (articles.length === 0){
                return res.status(404).json('No matching documents')
            }
            res.json(articles)
        })
    },

    getPractices: (req, res) => {
        Article.find({ sepractice: req.params.sepractice }, (err, articles) => {
            if (err) {
                return res.status(400).json(err)
            }
            if (!articles) {
                return res.status(404).json()
            }
            res.json(articles)
        })
    },

    createOne: (req, res) => {
        let newArticleDetails = req.body;
        newArticleDetails._id = new mongoose.Types.ObjectId();

        let article = new Article(newArticleDetails);
        article.save((err) => {
            if(err) return res.status(400).json(err);
            res.json(article);
        });
    }
}
