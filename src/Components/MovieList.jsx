import { Component } from "react";
import Poster from "./Poster";

const BASE_URL = "http://www.omdbapi.com/?apikey=3adfbdee&s=";
class MovieList extends Component {
  state = {
    movies: [],
    error: false,
    errorMsg: "",
    isLoading: true
  };
  fetchReservations = async () => {
    try {
      const response = await fetch(`${BASE_URL}${this.props.searchString}`);

      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search, isLoading: false });
      } else {
        this.setState({ error: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message, isLoading: false });
    }
  };
  scroll = (e) => {
    e.preventDefault();
    e.target.scrollLeft += e.deltaY;
  };
  componentDidMount = () => {
    this.fetchReservations();
  };

  render() {
    return (
      <section className="mt-4 ms-5 mb-4">
        <div className="d-flex justify-content-between mb-3">
          <h2 className="flex-grow-1 fs-3 text-white">{this.props.title}</h2>
          {this.state.isLoading && !this.state.error && (
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
        <div className="slider d-flex flex-nowrap" onWhell={(e) => this.scroll}>
          {this.state.movies.length === 0 && !this.state.error && !this.state.isLoading && (
            <div className="alert alert-success" role="alert">
              No movies found!
            </div>
          )}
          {this.state.error && !this.state.isLoading && (
            <div className="alert alert-danger" role="alert">
              {this.state.errorMsg ? this.state.errorMsg : "Error"}
            </div>
          )}
          {this.state.movies.map((movie) => (
            <Poster key={movie.imdbID} image={movie.Poster} />
          ))}
        </div>
      </section>
    );
  }
}
export default MovieList;