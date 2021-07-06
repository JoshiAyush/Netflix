import { getTopCrew as _getTopCrew } from "../imdb/title/index.js";
import { getTopCast as _getTopCast } from "../imdb/title/index.js";
import { getDetails as _getDetails } from "../imdb/title/index.js";
import { getFullCredits as _getFullCredits } from "../imdb/title/index.js";

class Movie {
  constructor(movie) {
    this.movie = movie;
    this.details = null;
    this.topCrew = null;
    this.topCasts = null;
    this.fullCredits = null;
  }

  get movieImageAttributes() {
    return this.movie.i;
  }

  get movieId() {
    return this.movie.id;
  }

  get movieTitle() {
    return this.movie.l;
  }

  get movieReleaseDate() {
    return this.movie.y;
  }

  get movieType() {
    return this.movie.q;
  }

  get movieRank() {
    return this.movie.rank;
  }

  get movieProtagonists() {
    return this.movie.s;
  }

  setTopCast(casts) {
    this.topCasts = casts;
  }

  getTopCast() {
    if (!this.topCasts)
      _getTopCast(this.movieId, (casts) => this.setTopCast(casts));

    return this.topCasts;
  }

  setTopCrew(crew) {
    this.topCrew = crew;
  }

  getTopCrew() {
    if (!this.topCrew)
      _getTopCrew(this.movieId, (crew) => this.setTopCrew(crew));

    return {
      ...("directors" in this.topCrew && {
        directors: () => {
          return this.topCrew.directors;
        }
      }),
      ...("writers" in this.topCrew && {
        writers: () => {
          return this.topCrew.writers;
        }
      })
    };
  }

  setFullCredits(fullCredits) {
    this.fullCredits = fullCredits;
  }

  getFullCredits() {
    if (!this.fullCredits)
      _getFullCredits(this.movieId, (fullCredits) =>
        this.setFullCredits(fullCredits)
      );

    return {
      ...("id" in this.fullCredits && {
        id: () => {
          return this.fullCredits.id;
        }
      }),
      ...("base" in this.fullCredits && {
        base: () => {
          return this.fullCredits.base;
        }
      }),
      ...("cast" in this.fullCredits && {
        cast: () => {
          return this.fullCredits.cast;
        }
      }),
      ...("crew" in this.fullCredits && {
        crew: () => {
          return {
            ...("directory" in this.fullCredits && {
              director: () => {
                return this.fullCredits.crew.director;
              }
            }),
            ...("producer" in this.fullCredits.crew && {
              producer: () => {
                return this.fullCredits.crew.producer;
              }
            })
          };
        }
      })
    };
  }

  setDetails(details) {
    this.details = details;
  }

  getDetails() {
    if (!this.details)
      _getDetails(this.movieId, (details) => this.setDetails(details));

    return {
      ...("@type" in this.details && {
        type: () => {
          return this.details["@type"];
        }
      }),
      ...("id" in this.details && {
        id: () => {
          return this.details.id;
        }
      }),
      ...("image" in this.details && {
        image: () => {
          return this.details.image;
        }
      }),
      ...("runningTimeInMinutes" in this.details && {
        runningTimeInMinutes: () => {
          return this.details.runningTimeInMinutes;
        }
      }),
      ...("nextEpisode" in this.details && {
        nextEpisode: () => {
          return this.details.nextEpisode;
        }
      }),
      ...("numberOfEpisodes" in this.details && {
        numberOfEpisodes: () => {
          return this.details.numberOfEpisodes;
        }
      }),
      ...("seriesEndYear" in this.details && {
        seriesEndYear: () => {
          return this.details.seriesEndYear;
        }
      }),
      ...("seriesStartYear" in this.details && {
        seriesStartYear: () => {
          return this.details.seriesStartYear;
        }
      }),
      ...("title" in this.details && {
        title: () => {
          return this.details.title;
        }
      }),
      ...("titleType" in this.details && {
        titleType: () => {
          return this.details.titleType;
        }
      }),
      ...("year" in this.details && {
        year: () => {
          return this.details.year;
        }
      })
    };
  }
}

export default Movie;
