import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, FreeMode, Keyboard, Mousewheel} from 'swiper';
import 'swiper/css';
import 'swiper/css/a11y';
import {FC, memo, useEffect, useState} from "react";
import API from "../../api/api";
import {IMovie} from "../../common/types/SearchPage/MovieType";
import Movie from "./Movie/Movie";
import s from './MoviesList.module.css'

interface MoviesListProps {
    inputValue: string
}

const MoviesList: FC<MoviesListProps> = memo(({inputValue}) => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [filtered, setFiltered] = useState<IMovie>()
    useEffect(() => {
        API.getMovies().then((res) => {
            setMovies(res)
        })
    }, [])

    useEffect(() => {
        movies.filter((m: any) => {
            if (m.title.toLowerCase().includes(inputValue.toLowerCase())
                && inputValue !== ""
                && inputValue.length !== 1) {
                setFiltered(m)
            }
        });
    })
    useEffect(()=>{
        if(inputValue==='') setFiltered(undefined)
    },[inputValue])

    return (
        <Swiper
            className={s.moviesContainer}
            modules={[FreeMode, A11y, Keyboard, Mousewheel]}
            direction='horizontal'
            slidesPerView={'auto'}
            spaceBetween={15}
            freeMode
            keyboard
            mousewheel
        >
            {
                filtered
                    ? <SwiperSlide className={s.moviesSwiperSlide}>
                        <Movie mv={filtered}/>
                    </SwiperSlide>
                    :
                    movies.map((mv, i) => {
                        return (
                            <SwiperSlide key={i} className={s.moviesSwiperSlide}>
                                <Movie key={i} mv={mv}/>
                            </SwiperSlide>
                        );
                    })

            }

        </Swiper>


    );
});

export default MoviesList;
