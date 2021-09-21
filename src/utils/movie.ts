import { IMovie } from "../config/interface";

export const getPosterSource = (movie: IMovie) =>
  movie.Poster === "N/A"
    ? "https://via.placeholder.com/320x460?text=Image+not+found"
    : movie.Poster;
