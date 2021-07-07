import validator from "validator";

import { is } from "../type/index.js";

import { getTopCrew as _getTopCrew } from "../imdb/title/index.js";
import { getTopCast as _getTopCast } from "../imdb/title/index.js";
import { getDetails as _getDetails } from "../imdb/title/index.js";
import { getFullCredits as _getFullCredits } from "../imdb/title/index.js";

import { ImdbHttpResponseException } from "../errors/index.js";

class Movie {
  constructor(movie) {
    this.movie = movie;
    this.$delayTimeInMilliSeconds = 0;
    this.$maximunNumberOfTryToMakeAfterEachFailure = 3;
  }

  feedDelayTimeAndMaximumNumberOfRetryAfterEachFailure(
    $delayTimeInMilliSeconds,
    $maximunNumberOfTryToMakeAfterEachFailure
  ) {
    if (is($delayTimeInMilliSeconds).a(Number)) {
      this.$delayTimeInMilliSeconds = $delayTimeInMilliSeconds;
    } else if (
      is($delayTimeInMilliSeconds).a(String) &&
      validator.isNumeric($delayTimeInMilliSeconds)
    ) {
      this.$delayTimeInMilliSeconds = Number($delayTimeInMilliSeconds);
    } else {
      this.$delayTimeInMilliSeconds = 0;
    }

    if (is($maximunNumberOfTryToMakeAfterEachFailure).a(Number)) {
      this.$maximunNumberOfTryToMakeAfterEachFailure =
        $maximunNumberOfTryToMakeAfterEachFailure;
    } else if (
      is($maximunNumberOfTryToMakeAfterEachFailure).a(String) &&
      validator.isNumeric($maximunNumberOfTryToMakeAfterEachFailure)
    ) {
      this.$maximunNumberOfTryToMakeAfterEachFailure = Number(
        $maximunNumberOfTryToMakeAfterEachFailure
      );
    } else {
      this.$maximunNumberOfTryToMakeAfterEachFailure = 3;
    }
  }

  getMovieImageAttributes() {
    return "i" in this.movie ? this.movie.i : null;
  }

  getMovieId() {
    return "id" in this.movie ? this.movie.id : null;
  }

  getMovieTitle() {
    return "l" in this.movie ? this.movie.l : null;
  }

  getMovieReleaseDate() {
    return "y" in this.movie ? this.movie.y : null;
  }

  getMovieType() {
    return "q" in this.movie ? this.movie.q : null;
  }

  getMovieRank() {
    return "rank" in this.movie ? this.movie.rank : null;
  }

  getMovieProtagonists() {
    return "s" in this.movie ? this.movie.s : null;
  }

  getTopCast({
    $delayTimeInMilliSeconds = 0,
    $maximunNumberOfTryToMakeAfterEachFailure = 3
  } = {}) {
    this.feedDelayTimeAndMaximumNumberOfRetryAfterEachFailure(
      $delayTimeInMilliSeconds,
      $maximunNumberOfTryToMakeAfterEachFailure
    );

    for (let i = 0; i < this.$maximunNumberOfTryToMakeAfterEachFailure; ++i) {
      try {
        setTimeout(() => {
          _getTopCast(this.movieId(), (casts) => {
            this.topCasts = casts;
          });
        }, this.$delayTimeInMilliSeconds);
      } catch (error) {
        if (i + 1 !== this.$maximunNumberOfTryToMakeAfterEachFailure)
          if (error instanceof ImdbHttpResponseException) continue;

        throw new Error(`Uncaught Exception: ${error.message}`);
      }

      this.$delayTimeInMilliSeconds = 3000;
    }

    return this.topCasts;
  }

  getTopCrew({
    $delayTimeInMilliSeconds = 0,
    $maximunNumberOfTryToMakeAfterEachFailure = 3
  } = {}) {
    this.feedDelayTimeAndMaximumNumberOfRetryAfterEachFailure(
      $delayTimeInMilliSeconds,
      $maximunNumberOfTryToMakeAfterEachFailure
    );

    for (let i = 0; i < this.$maximunNumberOfTryToMakeAfterEachFailure; ++i) {
      try {
        setTimeout(() => {
          _getTopCrew(this.movieId(), (crew) => {
            this.topCrew = crew;
          });
        }, this.$delayTimeInMilliSeconds);
      } catch (error) {
        if (i + 1 !== this.$maximunNumberOfTryToMakeAfterEachFailure)
          if (error instanceof ImdbHttpResponseException) continue;

        throw error;
      }

      this.$delayTimeInMilliSeconds = 3000;
    }

    return this.topCrew;
  }

  getFullCredits({
    $delayTimeInMilliSeconds = 0,
    $maximunNumberOfTryToMakeAfterEachFailure = 3
  } = {}) {
    this.feedDelayTimeAndMaximumNumberOfRetryAfterEachFailure(
      $delayTimeInMilliSeconds,
      $maximunNumberOfTryToMakeAfterEachFailure
    );

    for (let i = 0; i < this.$maximunNumberOfTryToMakeAfterEachFailure; ++i) {
      try {
        setTimeout(() => {
          _getFullCredits(this.movieId(), (fullCredits) => {
            this.fullCredits = fullCredits;
          });
        }, $delayTimeInMilliSeconds);
      } catch (error) {
        if (i + 1 !== this.$maximunNumberOfTryToMakeAfterEachFailure)
          if (error instanceof ImdbHttpResponseException) continue;

        throw error;
      }

      this.$delayTimeInMilliSeconds = 3000;
    }

    return this.fullCredits;
  }

  getDetails({
    $delayTimeInMilliSeconds = 0,
    $maximunNumberOfTryToMakeAfterEachFailure = 3
  } = {}) {
    this.feedDelayTimeAndMaximumNumberOfRetryAfterEachFailure(
      $delayTimeInMilliSeconds,
      $maximunNumberOfTryToMakeAfterEachFailure
    );

    for (let i = 0; i < this.$maximunNumberOfTryToMakeAfterEachFailure; ++i) {
      try {
        setTimeout(() => {
          _getDetails(this.movieId(), (details) => {
            this.details = details;
          });
        }, this.$delayTimeInMilliSeconds);
      } catch (error) {
        if (i + 1 !== this.$maximunNumberOfTryToMakeAfterEachFailure)
          if (error instanceof ImdbHttpResponseException) continue;

        throw error;
      }

      this.$delayTimeInMilliSeconds = 3000;
    }

    return this.details;
  }
}

export default Movie;
