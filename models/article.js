const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  articleId: {
    type: String,
    required: true,
    unique: true
  },
  author: String,
  pubDate: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
