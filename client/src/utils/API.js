import axios from "axios";

export default {
  getArticle: function(term) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f3539df570a247a7bcc391d4572768c5&q=" + term);
  }
};
