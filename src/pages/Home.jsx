import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY


const Home = () => {
    const [topMovies, setTopMovies] = useState ([])

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {

        const topRatedURL = `${moviesURL}?${apiKey}`;

        getTopRatedMovies(topRatedURL)

    }, [])


    return (
        <div className="container">
            <h2 className="title">Filmes populares: </h2>
            <div className="movies-container">
            {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} /> )}
            </div>
        </div>
    )
}

export default Home