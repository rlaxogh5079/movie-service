import PropTypes from "prop-types";


const MovieDetail = ({ytsUrl, imdbCode, title, year, genres, downloadCount, likeCount, description, imageUrl}) => {
    return (
        <div>
            <img src={imageUrl} alt={title}></img>
            <h2>
                <a href={ytsUrl}>{title}</a>
            </h2>

            <p>imdb_code : {imdbCode}</p>
            <p>발행 년도 : {year}년</p>
            <ul>
                {genres.map((genre) => (
                    <li>{genre}</li>
                ))}
            </ul>
            <p>다운로드 수 : {downloadCount}</p>
            <p>좋아요 수 : {likeCount}</p>
            <p>설명 : {description}</p>
            
        </div>
    )
}

MovieDetail.prototype = {
    id: PropTypes.number.isRequired,
    ytsUrl: PropTypes.string.isRequired,
    imdb_code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    downloadCount: PropTypes.number.isRequired,
    likeCount: PropTypes.number.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired
}

export default MovieDetail