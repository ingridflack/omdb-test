import { shallow } from "enzyme";
import MoviePoster from ".";
import { IMovie } from "../../config/interface";

const MOVIE: IMovie = {
  imdbID: "ID Test",
  Poster: "Poster Test",
  Title: "Title Test",
  Year: "1996",
  Runtime: "100 min",
  Rated: "Rated Test",
  imdbRating: "Rating Test",
  Plot: "Plot Test",
  Actors: "Actors Test",
  Genre: "Genre Test",
  Director: "Director Test",
};

const MOVIE_WITHOUT_POSTER = {
  ...MOVIE,
  Poster: "N/A",
};

describe("MoviePoster", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<MoviePoster movie={MOVIE} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot with N/A poster image", () => {
    const wrapper = shallow(<MoviePoster movie={MOVIE_WITHOUT_POSTER} />);
    expect(wrapper).toMatchSnapshot();
  });
});
