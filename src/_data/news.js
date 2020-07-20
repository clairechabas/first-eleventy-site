const axios = require('axios');
require('dotenv').config();

module.exports = async function () {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=fr&apiKey=${process.env.NEWS_API}&pageSize=5`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
