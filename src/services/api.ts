import axios from "axios";

axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3";

const host = import.meta.env.VITE_HOST;
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
const key = import.meta.env.VITE_GOOGLE_API_KEY;

const scopes = [
  "https://www.googleapis.com/auth/youtube",
  "https://www.googleapis.com/auth/youtube.channel-memberships.creator",
  "https://www.googleapis.com/auth/youtube.force-ssl",
  "https://www.googleapis.com/auth/youtube.readonly",
  "https://www.googleapis.com/auth/youtube.upload",
  "https://www.googleapis.com/auth/youtubepartner",
  "https://www.googleapis.com/auth/youtubepartner-channel-audit",
];

export function getOAuthUrl() {
  const url = "https://accounts.google.com/o/oauth2/auth";

  const params = {
    client_id: clientId,
    redirect_uri: host + redirectUri,
    response_type: "token",
    scope: scopes.join(" "),
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
    Authorization: token ? `Bearer ${token}` : undefined,
  };
}

export function getSearch(search: string, pageToken = "") {
  return axios.get(`search`, {
    params: {
      key,
      pageToken,
      q: search,
      part: "id,snippet",
      maxResults: 20,
      type: "video",
    },
  });
}

export function getVideo(id: string) {
  return axios.get(`videos`, {
    params: {
      key,
      id,
      part: "snippet,statistics",
    },
  });
}

export function getMyChannel() {
  return axios.get(`channels`, {
    params: {
      key,
      part: "snippet,contentDetails,brandingSettings,statistics",
      mine: true,
    },
  });
}
