import {useParams} from "react-router-dom";
import {useState, useEffect} from "react"
import MovieDetail from "../components/MovieDetail"

const Detail = () => {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState({})
    const { id } = useParams();
    const getMovie = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (<div>
        {loading ? <h1>Loading...</h1> : 
        <MovieDetail ytsUrl={movie.url} imdbCode={movie.imdb_code} title={movie.title} year={movie.year} genres={movie.genres} downloadCount={movie.download_count} likeCount={movie.like_count} description={movie.description_full} imageUrl={movie.medium_cover_image}/>
        }
    </div>)
}

export default Detail;