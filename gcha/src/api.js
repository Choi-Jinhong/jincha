import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "29a6c3ac150bc84cfbf876b5459a507b",
        laugauge: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/nowplaying"),
    upcoming: () => api.get("moive/upcoming"),
    popular: () => api.get("movie/popular"),
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/ariring_today")
}