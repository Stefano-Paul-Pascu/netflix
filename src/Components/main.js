function Main(){
    return(
    <div className="container-fluid">
        <div className="genre-details mx-md-5 mt-2">
            <div className="d-flex">
                <h3 className="text-light me-3 me-md-5">TV Shows</h3>
                <button className="btn btn-outline-secondary text-white bg-transparent dropdown-toggle genre-button"><span
                        className="pe-3">Genres</span></button>
            </div>
            <div>
                <div className="btn-group" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-text-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-grid" viewBox="0 0 16 16">
                            <path
                                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
            <h5 className="text-light mt-2 mb-2">Trending Now</h5>
            <div id="trending-now" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="movie-row">
                            <div className="row g-1">
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media0.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media1.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media2.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media3.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media4.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media5.jpg"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="movie-row">
                            <div className="row g-1">
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media0.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media1.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media2.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media3.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media4.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media5.jpg"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#trending-now" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#trending-now" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
        <div className="movie-gallery mx-md-5 mb-5">
            <h5 className="text-light mt-2 mb-2">Watch It Again</h5>
            <div id="watch-it-again" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="movie-row">
                            <div className="row g-1">
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media6.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media7.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media8.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media9.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media10.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media11.jpg"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="movie-row">
                            <div className="row g-1">
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media6.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media7.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media8.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media9.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media10.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media11.jpg"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#watch-it-again"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#watch-it-again"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
        <div className="movie-gallery mx-md-5 mb-5">
            <h5 className="text-light mt-2 mb-2">New Releases</h5>
            <div id="new-releases" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="movie-row">
                            <div className="row g-1">
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media12.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media13.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media14.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media15.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media16.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media17.jpg"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="movie-row">
                            <div className="row g-1">
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media12.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media13.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media14.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media15.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media16.jpg"/>
                                </div>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover" src="./assets/media/media17.jpg"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#new-releases" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#new-releases" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    </div>
    )
}

export default Main;