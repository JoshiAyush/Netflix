var unirest = require("unirest");
const { key } = require("../rapidapi.js");

export function getAllImages(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-all-images");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getAwardsSummary(tconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-awards-summary"
  );

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getAwards(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-awards");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getBase(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-base");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getBestPictureWinners(callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-best-picture-winners"
  );

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getBusiness(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-business");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getCharNameList(
  tconst,
  id,
  {
    currentCountry = "US",
    marketplace = "ATVPDKIKX0DER",
    purchaseCountry = "US"
  },
  callback
) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-charname-list"
  );

  req.query({
    id: id,
    tconst: tconst,
    currentCountry: currentCountry,
    marketplace: marketplace,
    purchaseCountry: purchaseCountry
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getCommingSoonMovies(
  { homeCountry = "US", purchaseCountry = "US", currentCountry = "US" },
  callback
) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-coming-soon-movies"
  );

  req.query({
    homeCountry: homeCountry,
    purchaseCountry: purchaseCountry,
    currentCountry: currentCountry
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getCommingSoonTvShows(currentCountry, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-coming-soon-tv-shows"
  );

  req.query({
    currentCountry: currentCountry
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getDetails(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-details");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getFilmingLocations(tconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-filming-locations"
  );

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function find(query, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/find");

  req.query({
    q: query
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getFullCredits(tconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-full-credits"
  );

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getGenres(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-genres");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getHeroWithPromotedVedio(
  tconst,
  { purchaseCountry = "US", currentCountry = "US" },
  callback
) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-hero-with-promoted-video"
  );

  req.query({
    tconst: tconst,
    purchaseCountry: purchaseCountry,
    currentCountry: currentCountry
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getImages(tconst, { limit = "25" }, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-images");

  req.query({
    tconst: tconst,
    limit: limit
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getMetaData(ids, { region = "US" }, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-meta-data");

  req.query({
    ids: ids,
    region: region
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getMetacritic(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-metacritic");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getMoreLikeThis(
  tconst,
  { currentCountry = "US", purchaseCountry = "US" },
  callback
) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-more-like-this"
  );

  req.query({
    tconst: tconst,
    currentCountry: currentCountry,
    purchaseCountry: purchaseCountry
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getMostPopularMovies(
  { homeCountry, purchaseCountry, currentCountry },
  callback
) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-most-popular-movies"
  );

  req.query({
    homeCountry: homeCountry,
    purchaseCountry: purchaseCountry,
    currentCountry: currentCountry
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getMostPopularTvShows(
  { homeCountry = "US", purchaseCountry = "US", currentCountry = "US" },
  callback
) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows"
  );

  req.query({
    homeCountry: homeCountry,
    purchaseCountry: purchaseCountry,
    currentCountry: currentCountry
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getNews(tconst, { limit = "25" }, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-news");

  req.query({
    tconst: tconst,
    limit: limit
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getOverViewDetails(tconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-overview-details"
  );

  req.query({
    tconst: tconst,
    currentCountry: "US"
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getParentalGuide(tconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-parental-guide"
  );

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getPlots(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-plots");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getPopularGenres(callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/list-popular-genres"
  );

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getPopularMoviesByGenre(genre, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre"
  );

  req.query({
    genre: `/chart/popular/genre/${genre}`
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getProductionStatus(tconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-production-status"
  );

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getRatings(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-ratings");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getReleaseExpectationBundle(
  tconst,
  { currentCountry = "US", purchaseCountry = "US" },
  callback
) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-release-expectation-bundle"
  );

  req.query({
    tconst: tconst,
    currentCountry: currentCountry,
    purchaseCountry: purchaseCountry
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getReleases(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-releases");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getReviews(
  tconst,
  { currentCountry = "US", purchaseCountry = "US" },
  callback
) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-reviews");

  req.query({
    tconst: tconst,
    currentCountry: currentCountry,
    purchaseCountry: purchaseCountry
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getSeasons(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-seasons");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getSynopses(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-synopses");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getTagLines(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-taglines");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getTechnical(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-technical");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getTopCast(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-top-cast");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getTopCrew(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-top-crew");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getTopRatedMovies(callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-top-rated-movies"
  );

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getTopRatedTvShows(callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows"
  );

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getTopStripe(
  tconst,
  { currentCountry, purchaseCountry },
  callback
) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-top-stripe");

  req.query({
    tconst: tconst,
    currentCountry: currentCountry,
    purchaseCountry: purchaseCountry
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getUserReviews(tconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-user-reviews"
  );

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getVedioPlayback(viconst, { region }, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/title/get-video-playback"
  );

  req.query({
    viconst: viconst,
    region: region
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getVedios(tconst, { limit = "25", region = "US" }, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-videos");

  req.query({
    tconst: tconst,
    limit: limit,
    region: region
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}

export function getVersions(tconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/title/get-versions");

  req.query({
    tconst: tconst
  });

  req.headers({
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}
