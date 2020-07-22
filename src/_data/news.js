const axios = require('axios');
const countries = require('./countries.json');
require('dotenv').config();

async function getNewsFrom(country) {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API}&pageSize=5`
    );
    return {
      country: country,
      articles: res.data.articles,
    };
  } catch (err) {
    console.log(err);
  }
}

module.exports = async function () {
  var newsPromises = countries.map(getNewsFrom);
  return Promise.all(newsPromises).then((news) => {
    console.log('news :', news);
    return [].concat.apply([], news);
  });
};
