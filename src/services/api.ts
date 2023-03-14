import axios from "axios";
import { scopes } from "./scopes";

const baseUrl = import.meta.env.VITE_GOOGLE_BASE_URL;
const OAuthGoogle = import.meta.env.VITE_GOOGLE_OAUTH;
const GoogleRegister = import.meta.env.VITE_GOOGLE_REGISTER;
const host = import.meta.env.VITE_HOST;
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
const key = import.meta.env.VITE_GOOGLE_API_KEY;

axios.defaults.baseURL = baseUrl;

export function getOAuthUrl() {
  const params = {
    client_id: clientId,
    redirect_uri: host + redirectUri,
    response_type: "token",
    scope: scopes.join(" "),
    include_granted_scopes: "true",
    state: "pass-through value",
  };
  const query = new URLSearchParams(params).toString();
  return `${OAuthGoogle}?${query}`;
}

export function getRegisterUrl() {
  return GoogleRegister;
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
