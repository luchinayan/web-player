import {IBackground} from "../common/types/SearchPage/BackgroundType";
import {IMovie} from "../common/types/SearchPage/MovieType";


const API = {
    async getBackgroundImages(): Promise<IBackground[]> {
        const res = await fetch('../../api/discover')

        const data = await res.json()

        return data.backgrounds
    },

    async getMovies(): Promise<IMovie[]> {
        const res = await fetch('../../api/discover')

        const data = await res.json()

        return data.items
    },
}

export default API
