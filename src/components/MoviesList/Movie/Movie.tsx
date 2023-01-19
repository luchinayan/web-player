import s from './Movie.module.css'
import {FC, useState} from "react";
import {MdPlayArrow} from "react-icons/md";
import {IMovie} from "../../../common/types/SearchPage/MovieType";

interface MovieProps {
    mv: IMovie
}

const Movie: FC<MovieProps> = ({mv}) => {

    const [showDetails, setShowDetails] = useState(false)

    const onShowDetails = () => setShowDetails(true)
    const onHideDetails = () => setShowDetails(false)

    return (
        <div onMouseEnter={onShowDetails}
             onMouseLeave={onHideDetails}
             className={s.movieContainer}>
            {!showDetails && <>
                <div className={s.rateContainer}>
                    {mv.is_new ? <div className={s.isNew}>New on NetUP TV</div> : null}
                    <div className={s.rate}>IMDB {mv.imdb_rate}/10</div>
                </div>
            </>}
            {showDetails && <div className={s.detailsContainer}>
                <div className={s.details}>
                    More details
                    <MdPlayArrow/>
                </div>
            </div>}
            <img src={"api/" + `${showDetails ? mv.keyframe : mv.poster}`} className={s.poster} alt=""/>
            <div className={s.infoContainer}>
                <div className={s.title}>{mv.title}</div>
                <div className={s.info}>{mv.country} | {mv.year} | {mv.length / 60}min | {mv.num_seasons} seasons
                    | {mv.min_age}+
                </div>
                <div className={s.genre}>{mv.genres.join(', ')}</div>
            </div>

        </div>
    );
};

export default Movie;
