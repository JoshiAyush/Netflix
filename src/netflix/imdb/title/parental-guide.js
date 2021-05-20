var unirest = require("unirest");

export function parentalGuide(tconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-parental-guide"
  );

  req.query({
    tconst: tconst || "tt0120338"
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
