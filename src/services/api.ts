import axios from "axios";

axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3";

const host = import.meta.env.VITE_HOST;
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
const key = import.meta.env.VITE_GOOGLE_API_KEY;

export function getOAuthUrl() {
  const url = "https://accounts.google.com/o/oauth2/auth";

  const params = {
    client_id: clientId,
    redirect_uri: host + redirectUri,
    response_type: "token",
    scope: "https://www.googleapis.com/auth/youtube.force-ssl",
    include_granted_scopes: "true",
    state: "pass-through value",
  };

  const query = new URLSearchParams(params).toString();

  return `${url}?${query}`;
}

export function getRegisterUrl() {
  return "https://accounts.google.com/signup";
}

export function setBearerToken(token?: string) {
  axios.defaults.headers.common = {
    Authorization: token ? `bearer ${token}` : undefined,
  };
}

export function listVideos() {
  return axios.get(
    `videos?key=${key}&part=snippet,statistics&chart=mostPopular&maxResults=20&type=video&regionCode=BR`
  );
}

export function listChannels(id: string) {
  return axios.get(`channels?key=${key}&part=snippet,statistics&id=${id}`);
}

export function listSearch(search: string, pageToken = "") {
  return axios.get(
    `search?key=${key}&part=id,snippet&q=${search}&maxResults=20&pageToken=${pageToken}&type=video`
  );
}

export function getVideo(id: string) {
  return axios.get(`videos?key=${key}&part=snippet,statistics,player&id=${id}`);
}

export function listVideosRecommended(id: string) {
  return axios.get(
    `videos?key=${key}&part=snippet,statistics&chart=mostPopular&maxResults=20&videoCategoryId=${id}`
  );
}

export function getVideosHistory(id: string) {
  return axios.get(
    `videos?key=${key}&part=snippet,statistics&id=${id}&maxResults=20`
  );
}

export function listVideoCategories() {
  return axios.get(
    `videoCategories?key=${key}&part=snippet&hl=pt_BR&regionCode=BR&maxResults=20`
  );
}

export function listVideosByCategories(id: string) {
  return axios.get(
    `videos?key=${key}&part=snippet,statistics&chart=mostPopular&maxResults=20&type=video&regionCode=BR&videoCategoryId=${id}`
  );
}
