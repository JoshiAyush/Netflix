var unirest = require("unirest");

export function actorKnownFor(callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/actors/get-known-for");

  req.query({
    nconst: "nm0001667"
  });

  req.headers({
    "x-rapidapi-key": "ddbc2bde9amsh919c2809f99f305p12a2bbjsn0a83f15c4097",
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}
