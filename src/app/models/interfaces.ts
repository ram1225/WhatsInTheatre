export interface ITrendingMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    popularity: number;
}

export class TrendingMovie implements ITrendingMovie {


    constructor(public adult, public backdrop_path, public genre_ids,
        public id, public original_language, public original_title, public overview,
        public poster_path, public release_date, public title, public video,
        public vote_average, public vote_count, public popularity) {

    }

}
