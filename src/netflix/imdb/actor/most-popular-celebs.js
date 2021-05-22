var unirest = require("unirest");

export function listMostPopularCelebs(
  { homeCountry, currentCountry, purchaseCountry },
  callback
) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/actors/list-most-popular-celebs"
  );

  req.query({
    homeCountry: homeCountry,
    currentCountry: currentCountry,
    purchaseCountry: purchaseCountry
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