import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const API_KEY = "78623a14ff23a512a97109e77e1151dc";
const LANGUAGE = "en-US";

const key_lan = {
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
};

const key_lan_videos = {
  params: {
    api_key: API_KEY,
    language: LANGUAGE,
    append_to_response: "vidios",
  },
};

function key_lan_search(term) {
  return {
    params: {
      api_key: API_KEY,
      language: LANGUAGE,
      query: encodeURIComponent(term),
    },
  };
}

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing", key_lan),
  upcoming: () => api.get("movie/upcoming", key_lan),
  popular: () => api.get("movie/popular", key_lan),
  movieDetail: id => api.get(`movie/${id}`, key_lan_videos),
  search: term => api.get(`search/movie/${term}`, key_lan_search(term)),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated", key_lan),
  popular: () => api.get("tv/top_rated", key_lan),
  airingToday: () => api.get("tv/airing_today", key_lan),
  showDetail: id => api.get(`tv/${id}`, key_lan_videos),
  search: term => api.get(`search/tv/${term}`, key_lan_search(term)),
};
