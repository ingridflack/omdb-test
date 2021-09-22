import { shallow } from "enzyme";
import React from "react";
import MovieCard from ".";
import { IMovie } from "../../config/interface";
import { FavoriteButton } from "./styles";

const EVENT = {
  preventDefault: () => {},
};

describe("MovieCard", () => {
  let toggleFn: jest.Mock;

  const MOVIECARD: IMovie = {
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

  beforeEach(() => {
    toggleFn = jest.fn();

    const CONTEXT = {
      state: {
        favorites: [],
      },
      setters: {
        toggleFavoriteMovie: toggleFn,
      },
    };

    jest.spyOn(React, "useContext").mockImplementation(() => CONTEXT);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<MovieCard to="/" item={MOVIECARD} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call the function when clicking on the component", () => {
    const wrapper = shallow(<MovieCard to="/" item={MOVIECARD} />);

    wrapper.find(FavoriteButton).simulate("click", EVENT);
    expect(toggleFn).toHaveBeenCalled();
  });
});
