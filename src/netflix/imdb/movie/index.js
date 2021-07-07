var unirest = require("unirest");

const { key } = require("../rapidapi.js");
const { ImdbHttpResponseException } = require("../../errors/index.js");

export function movie(query, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/auto-complete");

  req.query({
    q: query
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new ImdbHttpResponseException(res.error);

    callback(res.body);
  });
}
