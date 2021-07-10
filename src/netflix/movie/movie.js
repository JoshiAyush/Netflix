import validator from "validator";

import { is } from "../com/type.js";
import { sleepSync } from "../com/time.js";

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
    this.$delayTimeInMilliSeconds = is($delayTimeInMilliSeconds).a(Number)
      ? $delayTimeInMilliSeconds
      : is($delayTimeInMilliSeconds).a(String) &&
        validator.isNumeric($delayTimeInMilliSeconds)
      ? Number($delayTimeInMilliSeconds)
      : 0;

    this.$maximunNumberOfTryToMakeAfterEachFailure = is(
      $maximunNumberOfTryToMakeAfterEachFailure
    ).a(Number)
      ? $maximunNumberOfTryToMakeAfterEachFailure
      : is($maximunNumberOfTryToMakeAfterEachFailure).a(String) &&
        validator.isNumeric($maximunNumberOfTryToMakeAfterEachFailure)
      ? Number($maximunNumberOfTryToMakeAfterEachFailure)
      : 3;
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
        sleepSync(this.$delayTimeInMilliSeconds);

        _getTopCast(this.movieId(), (casts) => {
          this.topCasts = casts;
        });
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
        sleepSync(this.$delayTimeInMilliSeconds);

        _getTopCrew(this.movieId(), (crew) => {
          this.topCrew = crew;
        });
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
        sleepSync(this.$delayTimeInMilliSeconds);

        _getFullCredits(this.movieId(), (fullCredits) => {
          this.fullCredits = fullCredits;
        });
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
        sleepSync(this.$delayTimeInMilliSeconds);

        _getDetails(this.movieId(), (details) => {
          this.details = details;
        });
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
