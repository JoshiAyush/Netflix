var unirest = require("unirest");
const { key } = require("../rapidapi.js");

export function getAllFilmography(nconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/actors/get-all-filmography"
  );

  req.query({
    nconst: nconst
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

export function getAllImages(nconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/actors/get-all-images"
  );

  req.query({
    nconst: nconst
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

export function getAllNews(nconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/actors/get-all-news");

  req.query({
    nconst: nconst
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

export function getAllVideos(nconst, { region }, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/actors/get-all-videos"
  );

  req.query({
    nconst: nconst,
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

export function getAwardsSummary(nconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/actors/get-awards-summary"
  );

  req.query({
    nconst: nconst
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

export function getAwards(nconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/actors/get-awards");

  req.query({
    nconst: nconst
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

export function getBio(nconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/actors/get-bio");

  req.query({
    nconst: nconst
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

export function getBornTodayList({ month, day }, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/actors/list-born-today"
  );

  req.query({
    month: month,
    day: day
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

export function getInterestingJobs(nconst, callback) {
  var req = unirest(
    "GET",
    "https://imdb8.p.rapidapi.com/actors/get-interesting-jobs"
  );

  req.query({
    nconst: nconst
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

export function getKnownFor(nconst, callback) {
  var req = unirest("GET", "https://imdb8.p.rapidapi.com/actors/get-known-for");

  req.query({
    nconst: nconst
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

export function getMostPopularCelebsList(
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
    "x-rapidapi-key": key,
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    useQueryString: true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    callback(res.body);
  });
}
