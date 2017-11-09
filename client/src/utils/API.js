import axios from "axios";

export default {
  getSearch: function(term) {
    const key = "f3539df570a247a7bcc391d4572768c5";

    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" + term)
  },

  getSaved: function() {
    return axios.get("/api/articles");
  },

  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },

  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
