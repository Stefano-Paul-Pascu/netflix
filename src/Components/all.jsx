import MovieList from "./MovieList";

const All = () => (
    <div>
        <MovieList title='Lord of the rings' searchString='lord%20of%20the%20rings' />
        <MovieList title='Harry Potter' searchString='harry%20potter' />
        <MovieList title='Marvel Movies' searchString='Marvel' />
    </div>
)

export default All;